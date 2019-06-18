/*jshint esversion: 6 */

const express = require('express')
const app = express()
const sqlite = require('sqlite')
const bodyParser = require('body-parser')
const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname)
    }
})

const upload = multer({storage: storage})

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Headers', 'Content-Type')
    response.header('Access-Control-Allow-Origin', '*')
    next()
})
app.use(bodyParser.json())
app.use(express.static(path.join(path.resolve(), 'public')))

app.use(express.static(__dirname + '/uploads'));// you can access image 
//using this url: http://localhost:5000/uploads/a.png

//skapar refference till databas
let database
sqlite.open('database.sqlite').then(database_ => {
  database = database_
})

app.get('/api/product/:id', (request, response) => {
    //SQL fråga för att hämta produkten med det rätt id
    let id = request.params.id
    console.log("product id: " +id)
    response.status(230)

    database.all('SELECT * FROM products WHERE id=?', [id])
    .then(rows => {
        console.log("product fetched")
        response.send(rows)
    })
})

app.get('/api/products/?', (request, response) => {
    //SQL fråga för att hämta alla produkter baserat
    //på filtret och sökning
    const filter = request.query.filter
    const letter = request.query.letter
    const offset = 16 * (request.query.page - 1)
    //order = asc or decs
    const searchTerm = request.query.term
    if (filter === '0') {
        console.log('all products')
        database.all('SELECT *, count(*) OVER() AS full_count FROM products ORDER BY id desc LIMIT 16 OFFSET ?',[offset])
        .then(rows => {
            //rows kommer att vara en array
            response.send(rows)
        })
    } else if (filter === '1'){
        console.log('popular products')
        database.all('SELECT *, 15 AS full_count FROM products ORDER BY sales desc LIMIT 15')
        .then(rows => {
            //rows kommer att vara en array
            console.log(rows)
            response.send(rows)
        })
    } else if (filter === '2'){
        console.log('filter by letter'+ letter)
        let n = numberToLetter(letter)+'%'
        database.all('SELECT *, count(*) OVER() AS full_count FROM products WHERE name LIKE ? ORDER BY id desc LIMIT 15 OFFSET ?', [n, offset])
        .then(rows => {
            //rows kommer att vara en array
            console.log(rows)
            response.send(rows)
        })
    } else if (filter === '3') {
        //example request api/products/?filter=3&term=green
        //om inga inparametrar så svara med alla varor
        console.log("searched products");
        let search = '%' + searchTerm + '%'
        database.all('SELECT *, 15 AS full_count FROM products WHERE name LIKE ? ORDER BY sales desc LIMIT 15', [search])
        .then(rows => {
            //rows kommer att vara en array
            console.log(rows)
            response.send(rows)
        })
    }
    
})

app.post('/api/order', (request, response) => {
    let customer = request.body.customer
    let products = request.body.products
    database.run('INSERT INTO buyers(first_name, last_name, mail, phone, address, zip_code, city, country) '+
    'VALUES(?, ?, ?, ?, ?, ?, ?, ?)', [customer.fname, customer.lname, customer.mail, customer.phone, customer.address, customer.zipCode, customer.city, customer.country]
  )
  .then(output => {
      let buyerId = output.stmt.lastID
      database.run('INSERT INTO orders(buyer_id) VALUES(?)', [buyerId])
      .then(output => {
        let orderId = output.stmt.lastID
        for (var i = 0; i < products.length; i += 1) {
          database.run('INSERT INTO ordersProduct(ordersProduct_p_id, ordersProduct_o_id) VALUES(?, ?)', [products[i].id, orderId])
        }
        response.send()
      })
  })
})

app.get('/api/orders', (request, response) => {
    let orders = []
    let products = []
    database.all(`SELECT orders.order_id as id, buyers.first_name as fName, 
            buyers.last_name as lName, buyers.mail as mail, buyers.phone as phone, 
            buyers.address as address, buyers.zip_code as zipCode, buyers.city as city, buyers.country as country
            FROM orders
            INNER JOIN buyers
            ON orders.buyer_id = buyers.buyer_id
            ORDER BY orders.order_id desc`)
    .then(rows => {
        orders = rows
        database.all(`SELECT orders.order_id as orderId, products.id as productId, 
                products.name as product, products.price as price, products.description as desc
                FROM orders
                INNER JOIN ordersProduct
                ON orders.order_id = ordersProduct.ordersProduct_o_id
                INNER JOIN products
                ON ordersProduct.ordersProduct_p_id = products.id`)
        .then(rows => {
            products = rows
            for (let i = 0; i < orders.length; i++) {
                orders[i]['products'] = []
                for (let j = 0; j < products.length; j++) {
                    if (products[j].orderId === orders[i].id) {
                        let found = false
                        for (let l = 0; l < orders[i]['products'].length; l++) {
                            if (orders[i]['products'][l].id === products[j].productId) {
                                found = true
                                break;
                            }
                        }
                        if (found) {
                            let indexOfProduct = orders[i]['products'].findIndex(x => x.id === products[j].productId)
                            orders[i]['products'][indexOfProduct]['quantity'] = orders[i]['products'][indexOfProduct]['quantity'] + 1
                        } else {
                            orders[i]['products'].push({id: products[j].productId, 
                                name: products[j].product, 
                                price: products[j].price,
                                desc: products[j].desc,
                                quantity: 1})
                        }
                    }
                }
            }
            response.send(orders)
        })
    })
})

app.post('/api/product/add',upload.single('productImage'), (request, response) => {

    console.log(request.body)
    let imageUrl = ""
    if(request.file) {
    console.log("name: " +request.file.filename);
    console.log("path: " +request.file.path);
    const baseUrl = "http://localhost:5000/uploads/"
    imageUrl = baseUrl + request.file.filename
    console.log(imageUrl);
    }
    
    let product = request.body
    console.log(product);
    
    database.run(`INSERT INTO products(name, price, description, image, sales) 
    VALUES(?, ?, ?, ?, 0)`,
    [product.productName, product.productPrice, product.productDescription, imageUrl]
  ).then(res => {
      console.log(res); 
  })
  response.send("Adding product")
})

app.get('/api/admin/?', (request, response) => {
    const pw = request.query.pw
    let password = '1337'
    let loginSuccess = (pw === password)
    response.send(loginSuccess)
})


function numberToLetter(n) {
    let letter
    switch (n) {
        case '0':
            letter = 'A'
            break;
        case '1':
            letter = 'B'
            break;
        case '2':
            letter = 'C'
            break;
        case '3':
            letter = 'D'
            break;
        case '4':
            letter = 'E'
            break;
        case '5':
            letter = 'F'
            break;
        case '6':
            letter = 'G'
            break;
        case '7':
            letter = 'H'
            break;
        case '8':
            letter = 'I'
            break;
        case '9':
            letter = 'J'
            break;
        case '10':
            letter = 'K'
            break;
        case '11':
            letter = 'L'
            break;
        case '12':
            letter = 'M'
            break;
        case '13':
            letter = 'N'
            break;
        case '14':
            letter = 'O'
            break;
        case '15':
            letter = 'P'
            break;
        case '16':
            letter = 'Q'
            break;
        case '17':
            letter = 'R'
            break;
        case '18':
            letter = 'S'
            break;
        case '19':
            letter = 'T'
            break;
        case '20':
            letter = 'U'
            break;
        case '21':
            letter = 'V'
            break;
        case '22':
            letter = 'W'
            break;
        case '23':
            letter = 'X'
            break;
        case '24':
            letter = 'Y'
            break;
        case '25':
            letter = 'Z'
            break;
    }
    return letter
}

app.get('/api/randomProduct', (request, response) => {
    response.status(302)
    //SQL fråga för att hämta produkten med det rätt id
    database.all('SELECT COUNT(*) AS count FROM Products')
    .then(numberOfProducts => {
        let min=0;
        let max=numberOfProducts[0].count - 1;
         let index = Math.round(Math.random() * (+max - +min) +min )
        database.all('SELECT * FROM Products WHERE id = ?',[index])
        .then(randomProduct => {
            response.send(randomProduct[0])
        })
    })
})

app.listen(5000, () => {
    console.log('Service is running')
})



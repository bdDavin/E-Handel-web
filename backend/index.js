/*jshint esversion: 6 */

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const sqlite = require('sqlite')

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    next()
  })
app.use(bodyParser.json())
app.use(express.static(path.join(path.resolve(), 'public')))

//skapar refference till databas
let database
sqlite.open('database.sqlite').then(database_ => {
  database = database_
})

app.get('/api/product/:id?', (request, response) => {
    //SQL fråga för att hämta produkten med det rätt id
    let id = request.params.id
    console.log("product id: " +id);
    
    if (id) {
        response.status(230)

        database.all('SELECT * FROM Products WHERE id=?', [id])
        .then(rows => {
          console.log("producted fetched");
          response.send(rows)
        })
    } else {
        let testProduct = {
            'id': 563478,
            'name':'Dummy Vara',
            'price': 99999,
            'description':'Inget id angavs -> /api/product/id',
            'imageAdress': 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjf0Pi9xc_iAhVYxcQBHRFSBHoQjRx6BAgBEAU&url=https%3A%2F%2Fsv.wikipedia.org%2Fwiki%2FBild_(tidning)&psig=AOvVaw26-XNq7Iz9hVdCheZbR5Xh&ust=1559727934459313'
        }
        response.send(testProduct)
    }
})

app.get('/api/products/?', (request, response) => {
    //SQL fråga för att hämta alla produkter baserat
    //på filtret och sökning

    const filter = request.query.filter
    //order = asc or decs
    const order = request.query.order
    const searchTerm = request.query.term
    
    //om inga inparametrar så svara med alla varor
    if(!filter && !searchTerm) {
        console.log('all products');
        database.all('SELECT * from products').then(rows => {
            //rows kommer att vara en array
            response.send(rows)
        }) 
    } else {
  
        let search = '%' + searchTerm + '%'
        database.all('SELECT * from products WHERE name LIKE ?', [search]).then(rows => {
            //rows kommer att vara en array
            response.send(rows)
        })
    }
})


app.post('/api/order', (request, response) => {
    //Lägg upp order i databasen
    let newOrder = request.body
    response.send()
})
app.listen(5000, () => {
    console.log('Service is running')
})
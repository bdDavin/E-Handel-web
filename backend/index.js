/*jshint esversion: 6 */

const express = require('express')
const app = express()
const sqlite = require('sqlite')
const bodyParser = require('body-parser')
const path = require('path')

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
    const offset = 15 * (request.query.page - 1)
    //order = asc or decs
    const order = request.query.order
    const searchTerm = request.query.term
    if (filter === '0') {
        console.log('all products')
        database.all('SELECT *, count(*) OVER() AS full_count FROM products ORDER BY id desc LIMIT 15 OFFSET ?',[offset])
        .then(rows => {
            //rows kommer att vara en array
            console.log(rows.length)
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
    }
    //om inga inparametrar så svara med alla varor
    // if(!filter && !searchTerm) {
    //     console.log('all products');
    //     database.all('SELECT * from products')
    //     .then(rows => {
    //         //rows kommer att vara en array
    //         response.send(rows)
    //     })
    // } else {
    //     let search = '%' + searchTerm + '%'
    //     database.all('SELECT * from products WHERE name LIKE ?', [search])
    //     .then(rows => {
    //         //rows kommer att vara en array
    //         response.send(rows)
    //     })
    // }
})

app.get('/api/order', (request, response) => {
    //Lägg upp order i databasen
    response.send()
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

app.listen(5000, () => {
    console.log('Service is running')
})

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

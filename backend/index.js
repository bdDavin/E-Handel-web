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

let db
sqlite.open('yardsale.db').then(database => {
    db = database
})

app.get('/api/product/:id', (request, response) => {
    //SQL fråga för att hämta produkten med det rätt id
    let testProduct = {
        'id': 563478,
        'name':'Vara',
        'pris': 30,
        'imageAdress': 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjf0Pi9xc_iAhVYxcQBHRFSBHoQjRx6BAgBEAU&url=https%3A%2F%2Fsv.wikipedia.org%2Fwiki%2FBild_(tidning)&psig=AOvVaw26-XNq7Iz9hVdCheZbR5Xh&ust=1559727934459313'
    }
    response.send(testProduct)
})

app.get('/api/products/:tab/:letter', (request, response) => {
    //SQL fråga för att hämta alla produkter baserat på filtret
    const tab = request.params.tab
    const letter = request.params.letter
    if (tab === '0') {
        db.all('SELECT * FROM products')
        .then(products => {
            response.send(products)
            console.log(products)
        })
    } else if (tab === '1') {
        //Fråga för att hämta ordnad lista efter mest köpta
        db.all('SELECT * FROM products ')
        .then(products => {
            response.send(products)
            console.log(products)
        })
    } else if (tab === '3') {
        db.all('SELECT * FROM products WHERE name LIKE "?%"',[letter])
        .then(products => {
            response.send(products)
            console.log(products)
        })
    }
    
})

app.post('/api/order', (request, response) => {
    //Lägg upp order i databasen
    request.body
    response.send()
})
app.listen(5000, () => {
    console.log('Service is running')
})
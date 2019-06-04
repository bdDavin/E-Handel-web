const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    next()
  })
app.use(bodyParser.json())
app.use(express.static(path.join(path.resolve(), 'public')))

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

app.get('/api/products/:filter', (request, response) => {
    //SQL fråga för att hämta alla produkter baserat på filtret
    response.send(products)
})

app.post('/api/order', (request, response) => {
    //Lägg upp order i databasen
    request.body
    response.send()
})
app.listen(5000, () => {
    console.log('Service is running')
})
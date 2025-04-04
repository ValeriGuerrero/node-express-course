const express = require('express')
const path = require('path')
const { products } = require('./data')

const app = express()

app.use(express.static('./public'))

app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
})

app.get('/api/v1/products', (req, res) => {
    const newProducts = products.map((p) => {
        const { id, name, image, price, desc } = p
        return { id, name, image, price, desc }
    })
    res.json(newProducts)
})

app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID);
    const product = products.find((p) => p.id === Number(idToFind));
    console.log("API route hit!");

    if (!product) {
        return res.status(404).json({ message: "Product was not found." })
    }
    res.json(product)
})

app.get('/api/v1/query', (req, res) => {
    const { search, price, limit } = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((p) => {
            return p.name.includes(search)
        })
    }

    if (price) {
        sortedProducts = sortedProducts.filter((p) => {
            return p.price < Number(price)
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    res.status(200).json(sortedProducts)
})

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(3000, () => {
    console.log('server is listening on port 3000....')
})
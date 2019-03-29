const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const Product = require('./models/products');
const data = require('./data.json');
const server = express();

const port = process.env.PORT || 5678;
mongoose.connect('mongodb://localhost:27017/jshop', {useNewUrlParser: true});

// GET https://miapi.com/v1/products
// GET https://miapi.com/v1/products/1
// POST https://miapi.com/v1/products
// PUT https://miapi.com/v1/products/1
// DELETE https://miapi.com/v1/products/1

const filePath = path.resolve(__dirname, 'data.json');
const writeFile = promisify(fs.writeFile);

const save = content => writeFile(filePath, JSON.stringify(content));

const find = (data, id) => data.find(item => item._id === id);
const findIndex = (data, id) => data.findIndex(item => item._id === id);

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
server.use(bodyParser.json());

// enable CORS
server.use(cors())

// GET - solicitar datos
// /products
server.get('/products', (req, res) => {
    Product.find()
        .then((products) => {
            res.json(products);
        });
});

// /products/:id
server.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = find(data, id);

    if (!product) {
        res.status(404).send('No encontramos el producto');
        return;
    }

    res.json(product);
});

// POST - ingresar datos
// /products
server.post('/products', (req, res) => {
    const product = new Product(req.body);
    product.save()
        .then((product) => {
            res.json(product);
        });
});

// PUT - actualizar datos
// /products/:id
server.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const productIndex = findIndex(data, id);
    const product = data[productIndex];

    const newProduct = {
        ...product, // name: "Producto X"
        ...req.body, // { name: "Producto X2" }
    };

    data[productIndex] = newProduct;
    save(data);

    res.json(newProduct);
});


// DELETE - eliminar datos
// /products/:id
server.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const productIndex = findIndex(data, id);;
    const product = data[productIndex];

    data.splice(productIndex, 1);
    save(data);

    res.json(product);
});

server.listen(
    port,
    () => console.log(`Servidor corriendo en http://localhost:${port}`)
);

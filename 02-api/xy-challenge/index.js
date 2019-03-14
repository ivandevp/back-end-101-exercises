const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const {
    promisify
} = require('util');
const funkos = require('./data/funkos.json');
const server = express();

const port = process.env.PORT || 1234;

// GET https://miapi.com/v1/products
// GET https://miapi.com/v1/products/1
// POST https://miapi.com/v1/products
// PUT https://miapi.com/v1/products/1
// DELETE https://miapi.com/v1/products/1

const filePath = path.resolve(__dirname, './data/funkos.json');
const writeFile = promisify(fs.writeFile);
const save = content => writeFile(filePath, JSON.stringify(content));

const find = (data, id) => data.find(item => item.id === id);


server.use(bodyParser.urlencoded({
    extended: false
}));

server.use(bodyParser.json());

// GET - /Products
server.get('/products', (req, res) => {
    res.json(funkos);
})

// GET - /products/:id
server.get('/products/:id', (req, res) => {
    const {
        id
    } = req.params;
    const product = find(funkos, id);

    if (!product) {
        res.status(404).send(`No encontramos el producto con id ${id}`);
        return;
    }
    res.json(product)
})
// POST - /products
server.post('/products', (req, res) => {
    const product = {
        id: `${new Date().getTime()}`,
        ...req.body,
    };
    funkos.push(product);
    save(funkos);
    res.json(product);
})

server.listen(
    port,
    () => console.log(`Servidor corriendo en http://localhost:${port}`)
)
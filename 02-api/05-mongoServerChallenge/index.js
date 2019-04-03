const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const data = require('./data.json');
const server = express();
const ArduinosEndPoint = require('./models/products');

const port = process.env.PORT || 5678;
mongoose.connect('mongodb://localhost:27017/arduino-store', { useNewUrlParser: true });

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

// GET - solicitar datos
// /products
server.get('/products', (req, res) => {
    ArduinosEndPoint.find()
        .then((arduinos) => {
            console.log("Conected")
            res.json(arduinos);
            console.log(res.json(arduinos));
        })
        .catch(err => console.log('No, server is gone', err));
});

// /products/:id
 server.get('/products/:id', (req, res) => {
     const { id } = req.params;
     ArduinosEndPoint.findById(id)
         .then((arduinoById) => {
             if (!arduinoById) {
                 res.status(404).send('No encontramos el producto');
                 return;
             }

             res.json(arduinoById);
         })
         .catch(err => console.log('No, server is gone', err));
 });

 // POST - ingresar datos
 // /products
 server.post('/products', async (req, res) => {
     const product = new ArduinosEndPoint(req.body);
     product.save()
        .then((product) => {
            res.json(product);
        });
 });

// // PUT - actualizar datos
// // /products/:id
// server.put('/products/:id', (req, res) => {
//     const { id } = req.params;
//     const productIndex = findIndex(data, id);
//     const product = data[productIndex];

//     const newProduct = {
//         ...product, // name: "Producto X"
//         ...req.body, // { name: "Producto X2" }
//     };
//     ArduinosEndPoint.findByIdAndUpdate(
//         id,
//         newProduct,
//         { new: true },
//         (err, newProduct) => {
//             if(err) return res.status(500).send(err);
//             return res.send(todo);
//         }
//     )

//     // data[productIndex] = newProduct;
//     // save(data);

//     // res.json(newProduct);
// });


// // DELETE - eliminar datos
// // /products/:id
// server.delete('/products/:id', (req, res) => {
//     const { id } = req.params;
//     const productIndex = findIndex(data, id);
//     const product = data[productIndex];

//     ArduinosEndPoint.findByIdAndRemove(id, (err, product) => {
//         if(err) return res.status(500).send(err);
//         const response = {
//             message: "Delate success",
//             id: id
//         };
//         return res.status(200).send(response);
//     })
//     // data.splice(productIndex, 1);
//     // save(data);

//     // res.json(product);
// });

server.listen(
    port,
    () => console.log(`Servidor corriendo en http://localhost:${port}`)
);

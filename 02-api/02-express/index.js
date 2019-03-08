const express = require('express');
const pkg = require('./package.json');

const app = express();

app.get('/', (req, res) => {
    res.send('Hola desde la raíz');
});

app.get('/home', (req, res) => {
    res.send('Hola desde home');
});

app.get('/api/products', (req, res) => {
    res.json([{
        name: 'Producto 1',
        description: 'Descripción del producto 1',
        price: '2000',
        currency: 'MXN',
        category: 'Tecnología',
    }]);
});

app.listen(4321);

console.log('El servidor está corriendo en http://localhost:4321');
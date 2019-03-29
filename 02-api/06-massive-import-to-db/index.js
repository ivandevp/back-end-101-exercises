const mongoose = require('mongoose');

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const Product = require('./models/products');

const readFile = promisify(fs.readFile);

mongoose.connect('mongodb://localhost:27017/jshop',  { useNewUrlParser: true });

const init = async () => {
    const filePath = path.resolve(__dirname, 'books.json');
    const fileData = await readFile(filePath, { encoding: 'utf8' })

    const books = JSON.parse(fileData);

    const asyncSave = books.map((book) => {
        book.price = +book.price.slice(1);
        const product = new Product(book);
        return product.save();
    });

    const products = await Promise.all(asyncSave);

    console.log(products);
};

init();


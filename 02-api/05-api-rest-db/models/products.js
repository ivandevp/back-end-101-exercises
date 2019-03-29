const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    image: String,
    author: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
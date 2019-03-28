const mongoose = require('mongoose')

var arduinosSchema = new mongoose.Schema({
    arduinotitle: {
        type: String,
        required: true,
        price: String
    },
    img: String
});

const Products = mongoose.model('Arduinos', arduinosSchema);

module.exports = Products;
const mongoose = require('mongoose')

const arduinosSchema = new mongoose.Schema({
    title: String,
    oldPrice: String,
    price: String,
    image: String,
    buyLink: String,
    hoverDescription: String,
    productLabel: String
});

const Arduinos = mongoose.model('Arduinos', arduinosSchema);

module.exports = Arduinos;
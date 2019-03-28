const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const filePath = path.resolve(__dirname, process.env.FILENAME);

module.exports = filePath;
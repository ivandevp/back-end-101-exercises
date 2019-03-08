const fs = require('fs');
const { promisify } = require('util');

const rl = require('./rl-interface');

exports.question = (text) => new Promise((resolve, reject) => {
    rl.question(text, (answer) => resolve(answer));
});
exports.writeFile = promisify(fs.writeFile);

module.exports = {
    question,
    writeFile,
};
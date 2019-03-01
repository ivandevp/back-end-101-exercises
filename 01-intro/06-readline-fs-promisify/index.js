const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { promisify } = require('util');


const filePath = path.resolve(__dirname, 'prueba.txt');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const question = (text) => new Promise((resolve, reject) => {
    rl.question(text, (answer) => resolve(answer));
});
const writeFile = promisify(fs.writeFile);

question('Escribe algo que quieras guardar: ')
    .then((answer) => {
        rl.close();

        console.log(`Escribiste: ${answer}`);

        return writeFile(filePath, answer, { flag: 'a' });
    })
    .then(() => console.log('El archivo se escribió correctamente'))
    .catch((error) => console.error(`Hubo un error ${error.message}`));

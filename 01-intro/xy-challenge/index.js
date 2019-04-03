const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Escribe algo que quieras buscar: ', (answer) => {
    console.log(`Buscando: ${answer} ...`);
    const path = __dirname;
    const character = require('path');
    fs.readFile(character.join(path, 'prueba.txt'), 'utf8', (err, data) => {
        if (err) {
            console.error(`Hubo un error ${err.message}`);
            return;
        }
        const expReg = new RegExp(answer, "gi");
        const searched = data.match(expReg);
        if (!searched) {
            console.log('No encntrado');
        } else {
            console.log(`${answer} aparece: ${searched.length} veces`);
        }
    });

    rl.close();
});
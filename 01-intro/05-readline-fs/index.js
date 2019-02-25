const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Escribe algo que quieras guardar: ', (answer) => {
    console.log(`Escribiste: ${answer}`);

    fs.writeFile('prueba.txt', answer, { flag: 'a' }, (err) => {
        if (err) {
            console.error(`Hubo un error ${error.message}`);
            return;
        }

        console.log('El archivo se escribió correctamente');
    });

    rl.close();
});
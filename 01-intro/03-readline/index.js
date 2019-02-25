const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Escribe algo que quieras guardar: ', (answer) => {
    console.log(`Escribiste: ${answer}`);

    rl.close();
});
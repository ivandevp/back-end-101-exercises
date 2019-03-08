const { question, writeFile } = require('./modules');
const rl = require('./rl-interface');
const filePath = require('./destination');

question('Escribe algo que quieras guardar: ')
    .then((answer) => {
        rl.close();

        console.log(`Escribiste: ${answer}`);

        return writeFile(filePath, `${answer}\n`, { flag: 'a' });
    })
    .then(() => console.log('El archivo se escribió correctamente'))
    .catch((error) => console.error(`Hubo un error ${error.message}`));

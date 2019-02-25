const fs = require('fs');

fs.writeFile('prueba.txt', 'Nuevo texto', { flag: 'a' }, (err) => {
    if (err) {
        console.error(`Hubo un error ${error.message}`);
        return;
    }

    console.log('El archivo se escribió correctamente');
});
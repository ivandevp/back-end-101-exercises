const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const searchPromise = (message) => new Promise((resolve, reject) => {
	rl.question( message, (text) => {
		resolve(text);
	});
});

const readFilePromise = (file, option, text, error) => new Promise((resolve, reject) => {
	fs.readFile(file, option , function(error, data) {
		if(error){
			reject(error);
		}
		
		if(data.includes(text)){
			resolve();
		}
		else{
			console.log('No existe el texo ingresado :( ');
		}
		
	});
});

searchPromise('Escribe el texto a buscar... ')
	.then((text) => {
		console.log('El texto a buscar es... ' + text);
		console.log('Buscando texto... ');

		rl.close();

		return readFilePromise('prueba.txt', 'utf-8', text);
	})
	.then(() => {
		console.log('Se encontró el texto :)');
	})
	.catch(() => {
		console.error('');
	});
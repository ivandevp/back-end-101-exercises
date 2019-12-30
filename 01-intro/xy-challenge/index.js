const fs = require('fs');
const {promisify} = require('util');
const readline = require('readline');
const readFileAsync = promisify(fs.readFile);

const readFile = new Promise(function(resolve, reject){
	"use strict";
	readFileAsync(`${__dirname}/file.json`, {encoding: 'utf8'})
	  .then(contents => {
	    const jsonResponse = JSON.parse(contents);
	    resolve(jsonResponse.results);
	  })
	  .catch(error => {
	    throw error;
	  })
})

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const writeSearch = new Promise(function(resolve, reject){
	rl.question('Escribe el id que quieras buscar: ', (answer) => {
	    console.log(`Se iniciará la búsqueda para el id: ${answer}`);
	    resolve(answer);
	    rl.close();
	});
})

const initSearch = new Promise(function(resolve, reject){
	writeSearch.then((answer) => {
		
		readFile.then((loadFile) => {
			numFound = 0;
	    	loadFile.forEach(function(el){
	    		if (el.id == answer) {
	    			numFound++;
	    		}
	    	})
	    	showResponse(answer, numFound);
	    })

	})
})

const showResponse = function(search, numFound){
	if (numFound == 0) {
		console.log(`No obtuvimos resultados exitosos para la búsqueda "${search}"`);
		return;
	}
	console.log(`Tú búsqueda "${search}", se encontró "${numFound}" veces en el archivo ${__dirname}/file.json`);
}



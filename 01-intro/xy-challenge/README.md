# Challenge

Para jugar un poco más con las APIs de Node.js, usando los mismos módulos de
`readline` y `fs`. Crea un script que le pida al usuario ingresar un texto a
buscar dentro de un archivo. Y responder con un mensaje del resultado de la
búsqueda, por ejemplo un mensaje de encontrado o no existe.

## Hacker edition

Además de retornar el mensaje, en caso de que se encuentre el texto, indicar
cuántas veces se repite en todo el texto. Ejemplo:

* Archivo de texto:

```text
Hola hola holA HOLA
```

* Texto a buscar: `hola`

* Resultado: `El texto 'hola' se encontró 4 veces.`
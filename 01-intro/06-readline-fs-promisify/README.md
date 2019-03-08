# `readline` + `fs`

En este ejercicio, solicitamos un texto al usuario a través de `readline` y el
texto ingresado lo escribimos en un archivo haciendo uso de `fs`.

## ¿Cómo ejecutarlo?

Escribe en tu terminal:

```
$ back-end-101-exercises/01-intro/05-readline-fs: node index.js
Escribe algo que quieras guardar: hola
Escribiste: hola
El archivo se escribió correctamente
$ back-end-101-exercises/01-intro/05-readline-fs:
```

## ¿Qué resultado deberías obtener?

En el caso de que no ocurra ningún problema, deberías obtener el mensaje de
que escribas algo en la terminal, y luego ver reflejado el texto en la terminal
además del archivo que se indica en el código (si no lo cambias sería `prueba.txt`).
Si el archivo no existía, debería crearse con el texto, caso contrario, debería
agregarse el texto al final del archivo.
En caso de error, deberías obtener un mensaje de error en la terminal explicando
que pasó, uno de los más comunes con el manejo de archivos es que no tengas permisos
para crear archivos o de edición.
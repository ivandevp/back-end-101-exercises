# `fs`

En este ejercicio, escribimos un texto en un archivo haciendo uso de `fs`.

## ¿Cómo ejecutarlo?

Escribe en tu terminal:

```
$ back-end-101-exercises/01-intro/04-fs: node index.js
El archivo se escribió correctamente
$ back-end-101-exercises/01-intro/04-fs:
```

## ¿Qué resultado deberías obtener?

En el caso de que no ocurra ningún problema, deberías obtener el mensaje de
`el archivo se escribió correctamente`.
Si el archivo no existía, debería crearse con el texto, caso contrario, el texto
debería agregarse al final del archivo.
En caso de error, deberías obtener un mensaje de error en la terminal explicando
que pasó, uno de los más comunes con el manejo de archivos es que no tengas permisos
para crear archivos o de edición.
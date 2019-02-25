const os = require('os'); // Requerimos el módulo `os` y lo guardamos en una variable

/**
 * .platform() es un método del módulo os que nos devuelve un string con la
 * identificación del sistema operativo que estamos usando
 * Más info en: https://nodejs.org/api/os.html#os_os_platform
 **/
console.log(`Estoy trabajando desde ${os.platform()}`);
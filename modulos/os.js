import os from 'os'

const SIZE = 1024;

function kb(bytes) { return bytes / SIZE}
function mb(bytes) { return kb(bytes) / SIZE}
function gb(bytes) { return mb(bytes) / SIZE}

// SISTEMA OPERATIVO
console.log(os.platform());

// CANTIDAD PROCESOS
console.log(os.cpus().length);

// CONSTANTES DEL SISTEMA
console.log(os.constants);

// bytes libres en memoria
console.log(gb(os.freemem()));

// total memoria
console.log(gb(os.totalmem()));

console.log(os.homedir());

console.log(os.tmpdir());

console.log(os.hostname());

console.log(os.networkInterfaces())

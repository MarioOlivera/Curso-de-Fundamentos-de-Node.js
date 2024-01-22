import 'dotenv/config'

let nombre = process.env.NOMBRE || 'SIN NOMBRE'

console.log(`Hola ${nombre}!`)
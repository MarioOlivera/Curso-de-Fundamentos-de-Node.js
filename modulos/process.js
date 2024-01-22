process.on('beforeExit', () => {
    console.log('El proceso va a terminar')
})

process.on('exit', () => {
    console.log('El proceso termino')
})

process.on('uncaughtException',(err, origen) => {
    console.log('excepcion tomada')

    console.error(err)
})

funcionQueNoexiste()

console.log('texto despues de excepcion')
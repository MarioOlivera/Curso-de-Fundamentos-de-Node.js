
console.info('Mensaje info')
console.error('Mensaje error')
console.warn("mensaje warning")

var tabla = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'W'
    }
]

console.table(tabla)

console.group('Conversacion')
console.log("Hola")
console.log("BLA BLA BLA")
console.log("Adios")
console.groupEnd("Conversacion")


function funcion1()
{
    console.group('Funcion 1')
    console.log("ESTO ES DE LA FUNCION 1")
    funcion2()
    console.log("ESTO TAMBIEN ES DE LA FUNCION 1")
    console.groupEnd('Funcion 1')
}

function funcion2()
{
    console.group('Funcion 2')
    console.log("Ahora estamos en la funcion 2")
    console.groupEnd('Funcion 2')
}

funcion1()

console.count('veces')
console.count('veces')
console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')
async function hola(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola ${nombre}`);
            resolve(nombre)
        },1500)
    });
}

async function hablar()
{
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla......');
            resolve();
        }, 1500)
   })
}

async function adios(nombre)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios ${nombre}`)
            resolve(nombre);
        }, 1000) 
    })
}

console.log('Empezamos el proceso');

let nombre = await hola('Mario');
await hablar();
await hablar();
await adios(nombre);

console.log('Termina el proceso');
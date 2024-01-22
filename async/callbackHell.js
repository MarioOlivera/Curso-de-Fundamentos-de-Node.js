function hola(nombre, miCallback){
    setTimeout(() => {
        console.log(`Hola ${nombre}`);
        miCallback()
    },1500)
}

function hablar(callbackHablar)
{
    setTimeout(() => {
        console.log('Bla bla bla......');
        callbackHablar();
    })
}

function adios(nombre, otroCallback)
{
    setTimeout(() => {
        console.log(`Adios ${nombre}`)
        otroCallback()
    }, 1000)
}

function conversacion(nombre, veces, callback)
{
    if(veces >= 0)
    {
        hablar(() => {
            conversacion(nombre, --veces, callback)
        })
    }
    else
    {
        
        adios(nombre, callback)
    }
}

console.log('Iniciando proceso....')

const nombre = 'Mario';

hola(nombre, function(){
    conversacion(nombre, 3, () => console.log('Terminado'));
});

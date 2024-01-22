let  suma = 0;

console.time('todo');
console.time('bucle');

for(let i=0; i < 1000000000;i++)
{
    suma += 1;
}

console.timeEnd('bucle');

let  suma2 = 0;

console.time('bucle2');

for(let j=0; j < 1000000000;j++)
{
    suma2 += 1;
}

console.timeEnd('bucle2');

console.timeEnd('todo');


console.time('asincrono')
console.log("EMPIEZA EL PROCESO ASINCRONO");

asincrona().then(() => {
    console.timeEnd('asincrono');
})

function asincrona()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Termina el proceso asincrono')
            resolve()
        },2000)
    })
}
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

function leer(ruta, cb)
{
    fs.readFile(ruta, (err, data) => {
        // LEIDO
        console.log(data.toString())
    })
}

function escribir(ruta, contenido, cb)
{
    fs.writeFile(ruta, contenido, (err, data) => {
        if(err)
        {
            console.error('No he podido escribirlo', err);
        }
        else
        {
            console.log('Se ha escrito correctamente')
        }
    })  
}

function borrar(ruta, cb)
{
    fs.unlink(ruta, cb);
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

leer(__dirname+'/archivo.txt')
escribir(__dirname+'/archivo.txt', 'Cadena de prueba')
borrar(__dirname+'/archivo.txt', (err, data) => console.log("OK!"))


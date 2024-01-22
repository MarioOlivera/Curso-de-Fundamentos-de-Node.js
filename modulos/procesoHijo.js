import {exec, spawn} from 'child_process'

/*
exec('node consola.js', (err, stdout, sterr) => 
{
    if(err)
    {
        console.log(err)
        return false
    }

    console.log(stdout)
})*/

let proceso = spawn('cmd.exe', ['/c','dir']); // FOR WINDOWS :)

console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data', function(dato){
    console.log("KILLED???", proceso.killed)
    console.log(dato.toString())
})

proceso.on('exit', function(){
    console.log('El proceso terminó')
    console.log("KILLED???", proceso.killed)
})
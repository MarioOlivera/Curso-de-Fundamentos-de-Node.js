function otraFuncion()
{
    return breakFunction();
}

function breakFunction()
{
    return 3 + z;
}

function breakFunctionAsincrona() // CRASHEA
{
    setTimeout(() => {
        breakFunction()
    })
}

try
{
    console.info("LLAMO A breakFunction")
    breakFunctionAsincrona()
}
catch(e)
{
    console.error(e)
}
finally
{
    console.info("TERMINADO IGUAL")
}
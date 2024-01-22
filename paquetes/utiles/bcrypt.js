import bcrypt from 'bcrypt'

console.log(bcrypt)

const password = '1234Segura!';

/*
bcrypt.hash(password, 5, (err, hash) => {

    console.log(hash)
});
*/

async function hashear()
{
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 5, (err, hash) => {

            if(err)
            {
                reject("Error al querer hacer el hash")
            }
            else
            {
                resolve(hash)
            }
        });
    })
}

async function validarHash(data, hash)
{
    return new Promise((resolve, reject) => {
       const result = bcrypt.compare(data, hash);

       resolve(result);
    });
    
}

const hash = await hashear().then((value) => value).catch(error => error);

const validado = await validarHash(password, hash).then((value) => value).catch(error => error)

console.log(validado)

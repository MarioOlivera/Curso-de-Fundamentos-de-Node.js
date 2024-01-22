import http from 'http'

function router(req, resp){
    console.log('nueva peticion');
    
    switch(req.url)
    {
        case '/hola':
            resp.write('HELLO'),
            resp.end();
            break;
        default:
            resp.write("ERROR 404");
            resp.end();
    }

    //resp.writeHead(201, {'Content-Type': 'text/plain'})

    //resp.write('HTTP NODE JS')

    //resp.end();
}

http.createServer(router).listen(3000)
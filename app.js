const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200 , {'content-type' : 'Application/html'} )

    let salida = {
        nombre: 'Fernando',
        edad: 35,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    res.end();
})
.listen(8080);

console.log(`Escuchando el puerto 8080`);
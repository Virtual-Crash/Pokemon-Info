const http = require('http');

const port = process.env.PORT || 5000;

const server = http.createServer((request, response) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');

        const req = https.request(options, res => {
                console.log(`statusCode: ${res.statusCode}`)

                res.on('data', d => {
                        response.end('Making decisions is hard');
                        //process.stdout.write(d)
                })
        })

        req.on('error', error => {
                console.error(error)
        })

        req.end()


        
});

server.listen(port, (err) => {
        if (err) {
                return console.log('Something went wrong ', err);
        }
        console.log('Server Listening on: ${port}');
});





const options = {
        hostname: 'pokeapi.co',
        port: 443,
        path: '/api/v2/pokemon/squirtle',
        method: 'GET'
}

const req = https.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`)

        res.on('data', d => {
                process.stdout.write(d)
        })
})

req.on('error', error => {
        console.error(error)
})

req.end()
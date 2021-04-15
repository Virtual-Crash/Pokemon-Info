const http = require('http');
const https = require('https');
const fetch = require('node-fetch');

const port = process.env.PORT || 5000;

const server = http.createServer((request, response) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        pokeInfo.then(data => {
                console.log(data)
                // response.end('Making decisions is hard');
                response.end(`${data.name} is  the ${data.order} pokemon in the pokedex`)
        })
});

server.listen(port, (err) => {
        if (err) {
                return console.log('Something went wrong ', err);
        }
        console.log('Server Listening on: ${port}');
});





// const options = {
//   hostname: 'pokeapi.co',
//   port: 443,
//   path: '/api/v2/pokemon/squirtle',
//   method: 'GET'
// }
pokemon_we_care_about = "squirtle"
const pokeInfo = fetch(`http://pokeapi.co//api/v2/pokemon/${pokemon_we_care_about}`).then(d => d.json())
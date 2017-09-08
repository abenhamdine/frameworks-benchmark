const dataBig = require('./data/dataBig');
const dataSmall = require('./data/dataSmall');
const fastify = require('fastify')();
// Declare a route
fastify.get('/big', function(_req, res) {
    res.send(dataBig);
});
fastify.get('/small', function(_req, res) {
    res.send(dataSmall);
});
fastify.get('/hello', function(_req, res) {
    res.send({ hello: 'world' });
});

fastify.listen(3000, function(err) {
    if (err) { throw err; }
    console.log(`server listening on ${fastify.server.address().port}`);
});
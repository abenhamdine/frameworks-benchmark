const express = require('express');
const app = express();
app.disable('etag')
const dataBig = require('./data/dataBig');
const dataSmall = require('./data/dataSmall');
app.get('/big', (_req, res) => {
    res.send(dataBig);
});
app.get('/small', (_req, res) => {
    res.send(dataSmall);
});
app.get('/hello', (_req, res) => {
	res.send({ hello: 'world' })
});

app.set('ip', '127.0.0.1')
app.set('port', 3000);

app.listen(app.get('port'), app.get('ip'), () => {
    console.log(`express listening on ${app.get('ip')} ${app.get('port')}`);
});
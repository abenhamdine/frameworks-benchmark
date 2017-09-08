const express = require('express')
var uws = require('uws')
var app = uws.http.getExpressApp(express)
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
uws.http.createServer(app).listen(3000)
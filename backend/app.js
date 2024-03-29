'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app= express();

//cargar archivos de rutas
var user_routes = require('./routes/user');
var product_routes = require('./routes/product');

//middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(cors())
//rutas
app.use('/api',user_routes,product_routes);

//exportar
module.exports = app;
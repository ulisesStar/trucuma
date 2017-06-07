var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//- Rutas

var routes = require('./http/routes');
var persona = require('./http/routes/routePersona');
var interes = require('./http/routes/routeInteres');
var imagen = require('./http/routes/routeImagen');
var personainteres = require('./http/routes/routePersonaInteres');
var usuario = require('./http/routes/routeUsuario');

// - Conexion a la base de datos

var con = require('./http/connection');

// - Middlewares

var lessMiddleware = require('less-middleware')

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "jade");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

app.use('/', interes);
app.use('/', persona);
app.use('/', imagen);
app.use('/', personainteres);
app.use('/', usuario);


app.use(lessMiddleware(__dirname + '/assets'));

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'http')));

module.exports = app;

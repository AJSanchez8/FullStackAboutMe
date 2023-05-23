

// Creamos todo el servidor con express

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar archivos de rutas
var project_routes = require('./rutes/project');

// Middlewares 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
  
// rutas
app.use('/api', project_routes);


// Cargamos rutas en si, las quitamos porque estamos separando la vista del controlador, ahora esta en la carpeta controller
/*
app.get('/', (req, res)=>{
    res.status(200).send(
        "<h1>Pagina de inicio</h1>"
    );
});
app.get('/test', (req, res)=>{
    res.status(200).send({
        message: "Estas en localhost:3700/test"
});

});
*/

// Exportamos el modulo
module.exports = app;

// Conectar NodeJS con MongoDB

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://0.0.0.0:27017/')
            .then(() =>{
                console.log('FUNCIONA POR FIN');

                //Creamos servidor
                app.listen(port, ()=> {
                    console.log('Servidor corriendo correctamente en el localhost 3700')
                });



            })
            .catch(err =>console.log(err));



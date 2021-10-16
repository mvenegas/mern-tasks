const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const {mongoose} = require('./database');

//Settings (Definición de variables)
app.set('port', process.env.PORT || 3000);

//Middlewares (Son funciones que se ejecutan antes que lleguen a nuestras rutas)
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/task', require('./routes/task.routes'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
app.listen(app.get('port'), function(){
    console.log(`server on port ${app.get('port')}`);
});
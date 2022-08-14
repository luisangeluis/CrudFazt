const express = require('express');
//.HBS
const exphbs = require('express-handlebars');
const { create } = require('express-handlebars');
const morgan = require('morgan');

// console.log(exphbs);
const indexRoutes = require('./routes/index.routes').router;
//CONFIGURACION DE LA RUTA DE LAS views
const path = require('path');

const app = express();

// MOTOR DE PLANTILLAS PARA LAS VISTAS
app.set('views', path.join(__dirname, 'views'));

//FORMA 1 PARA FIJAR LAS VIEWS
// const hbs =create({
//   layoutsDir: path.join(app.get('views'), 'layouts'),
//   defaultLayout: 'main',
//   extname: '.hbs',
// })
// app.engine('.hbs',hbs.engine)

//FORMA 2 PARA FIJAR LAS VIEWS
app.engine(
  '.hbs',
  exphbs.engine({
    //ruta de los layouts
    layoutsDir: path.join(app.get('views'), 'layouts'),
    //ruta de los partials
    partialsDir: path.join(app.get('views'), 'partials'),
    //main layout
    defaultLayout: 'main',
    //Extension de las vistas
    extname: '.hbs',
  })
);
app.set('view engine', '.hbs');

//MIDDLEWARES
//Sirve para ver que tipo de peticiones se hacen la pagina
app.use(morgan('dev'))
//Sirve para ver la peticion por consola
app.use(express.urlencoded({extended:false}))

//ROUTES
app.use(indexRoutes);

//PUBLIC
app.use(express.static(path.join(__dirname,'public')));

module.exports = {
  app,
};

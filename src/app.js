const express = require('express');
//.HBS
const exphbs = require('express-handlebars');
const { create } = require('express-handlebars');

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

//ROUTES
app.use(indexRoutes);

module.exports = {
  app,
};

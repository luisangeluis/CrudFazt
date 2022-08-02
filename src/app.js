const express = require('express');
const exphbs = require('express-handlebars');
// console.log(exphbs);
const indexRoutes = require('./routes/index.routes').router;
//CONFIGURACION DE LA RUTA DE LAS views
const path = require('path');

const app = express();

// MOTOR DE PLANTILLAS PARA LAS VISTAS
app.set('views', path.join(__dirname, 'views'));
app.engine(
  '.hbs',
  exphbs.engine({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    defaultLayout: 'main',
    extname: '.hbs',
    //Revisar docs sobre hbs
  })
);

//ROUTES
app.use(indexRoutes);

module.exports = {
  app,
};

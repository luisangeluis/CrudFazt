// run `node index.js` in the terminal
//npm init -y crear el json
//morgan dependencia para ver consola las peticiones
//-D es para devdependencia
// console.log(`Hello Node.js v${process.versions.node}!`);

//Arranque de la app
const app = require('./app').app;

app.listen(3000);
console.log('Server on por: ', 3000);

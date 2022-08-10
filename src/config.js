
const dotenv =require('dotenv');

//Config lo ejecutamos para poder acceder a las variables de entorno
dotenv.config();

//Damos un valor por defecto por si no existe la variable de entorno
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/test';
const PORT = process.env.PORT || 5000;

module.exports={
  MONGODB_URI,
  PORT
}
const mongoose = require('mongoose');
//VARIABLES DE ENTORNO
const { MONGODB_URI } = require('./config');

(async () => {
  const pass = 'Nxtlxer00';
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log('Db connect to', db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();

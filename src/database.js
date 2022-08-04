const mongoose = require('mongoose');

(async () => {
  console.log('hola');
  const pass = 'Nxtlxer00';
  try {
    const db = await mongoose.connect(
      // 'mongodb+srv://luisangeluis:Nxtlxer00@cluster0.oaq1txq.mongodb.net/?retryWrites=true&w=majority'
      // `mongodb+srv://luisangeluis:${pass}@cluster0.oaq1txq.mongodb.net/?retryWrites=true&w=majority`
      `mongodb+srv://luisangeluis:${pass}@cluster0.oaq1txq.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log('Db connect to', db.connection.name);
    console.log('adios');
  } catch (error) {
    console.log(error);
  }
})();

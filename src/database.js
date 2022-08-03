const mongoose = require('mongoose');

(async () => {
  console.log('hola');
  try {
    const db = await mongoose.connect(
      'mongodb+srv://luisangeluis:Vqv5bywtyUR1h87E@cluster0.oaq1txq.mongodb.net/retryWrites=true&w=majority'
    );
    console.log('Db connect to', db);
    console.log('adios');
  } catch (error) {
    console.log(error);
  }
})();

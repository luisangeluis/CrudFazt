const mongoose = require('mongoose');

(async () => {
  const pass = 'Nxtlxer00';
  try {
    const db = await mongoose.connect(
      `mongodb+srv://luisangeluis:${pass}@cluster0.oaq1txq.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log('Db connect to', db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();

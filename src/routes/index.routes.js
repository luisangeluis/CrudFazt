const router = require('express').Router();

router.get('/', (req, res) => {
  // res.send('<h1>hello world</h1>');
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = {
  router,
};

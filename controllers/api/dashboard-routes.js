
const router = require('express').Router();

router.get('/', async (req, res) => {
  await res.render('dashboard', {

  });
});

module.exports = router;

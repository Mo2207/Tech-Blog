
const router = require('express').Router();

router.get('/', async (req, res) => {
  await res.render('signupLogin', {

  });
});

module.exports = router;
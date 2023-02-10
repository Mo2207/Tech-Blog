
const router = require('express').Router();
const dashboardRoutes = require('./dashboard-routes');
const homepageRoutes = require('./homepage-routes');
const signupLoginRoutes = require('./signupLogin-routes');

router.use('/', homepageRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/signupLogin', signupLoginRoutes);

module.exports = router;
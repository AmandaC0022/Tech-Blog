const router = require('express').Router();

// const apiRoutes = require('./api');
const homeRoutes = require('./view/home');
const authRoutes = require('./view/auth');
const dashboardRoutes = require('./view/dashboard');
const blogRoutes = require('./view/blog');

router.use('/', homeRoutes);
router.use('/login', authRoutes); 
router.use('/dashboard', dashboardRoutes); 
router.use('/blog', blogRoutes); 

// router.use('/api', apiRoutes);

module.exports = router;

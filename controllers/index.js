const router = require('express').Router();

// const apiRoutes = require('./api');
const homeRoutes = require('./view/home');
const authRoutes = require('./view/auth');
const dashboardRoutes = require('./view/dashboard');
const blogRoutes = require('./view/blog');
const apiAuthRoutes = require('./api/auth');
const apiBlogRoutes = require('./api/blog');
const apiCommentRoutes = require('./api/comment');


router.use('/', homeRoutes);
router.use('/', authRoutes); 
router.use('/dashboard', dashboardRoutes); 
router.use('/blog', blogRoutes); 
router.use('/api', apiAuthRoutes); 
router.use('/api/blog', apiBlogRoutes); 
router.use('/api/comment', apiCommentRoutes); 

// router.use('/api', apiRoutes);

module.exports = router;

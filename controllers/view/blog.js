const router = require('express').Router();
const { Blog } = require('../../models'); 

//get all of the blogs
router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const blogData = await Blog.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const blogs = blogData.map((blog) => blog.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('dashboard', {blogs})
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
router.get('/new', async (req, res) => {
    res.render("blogNew"); 
});

router.get('/edit/:id', async (req, res) => {
    res.render("blogEdit"); 
});

router.get('/:id', async (req, res) => {
    res.render("blogPost"); 
});

module.exports = router; 
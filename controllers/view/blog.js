const router = require("express").Router();
const { Blog, User } = require('../../models');
const withAuth = require('../../utils/auth');

//this shows the blogNew page
//THIS WORKS!! 
router.get('/new', (req, res) => {
    res.render("blogNew")
})

//this shows a certain blog by using it's ID
//THIS WORKS!! 
router.get('/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: {
        model: User, 
        attributes: ['name'],
      }
    });

    if (!blogData) {
      res.status(404).json({ message: 'No Blog found with this id!' });
      return;
    }
    const blogs = blogData.get({ plain: true });
    
    res.render('blogPost', { ...blogs });

  } catch (err) {
    res.status(500).json(err);
  }
}); 

// This shows the edit blog page with a certain blog on the page
//this works!! 
router.get('/edit/:id', async (req, res) => {
  try {
    const data = await Blog.findByPk(req.params.id, {
    });

    if (!data) {
      res.status(404).json({ message: 'No Blog found with this id!' });
      return;
    }
    const blogData = data.get({ plain: true });
    
    res.render('blogEdit', {blogData});

  } catch (err) {
    res.status(500).json(err);
  }
}); 

module.exports = router
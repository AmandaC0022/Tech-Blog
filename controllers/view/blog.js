const router = require("express").Router();
const { Blog, User } = require('../../models');

router.get('/new', (req, res) => {
    res.render("blogNew")
})

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
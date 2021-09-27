const router = require('express').Router();
const { Blog, User } = require('../../models'); 

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
    res.render('home', blogs
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
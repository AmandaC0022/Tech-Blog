const router = require('express').Router();
const { Blog } = require('../../models'); 

//create a new blog
router.post('/', async (req, res) => {
    try {
      const blogData = await Blog.create(req.body);
  
      res.status(200).json(blogData);
    } catch (err) {
      res.status(400).json(err);
    }
});

//delete a blog using the blog_id
router.delete('/:id', async (req, res) => {
    try {
        const blogData = await Blog.destroy(req.body, {
            where: {
                id: req.params.id
            }
        }); 
        res.status(200).json(blogData);
    } catch (err) {
    res.status(400).json(err);
    }
}); 

//TO DO: create put request to edit a blog 
module.exports = router; 
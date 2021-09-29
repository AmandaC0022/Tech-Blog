const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');


router.post("/", withAuth, async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body);
        if (newBlog) {
            res.status(201).send(newBlog)
        } else {
          res.status(400).send('blog not created')
        }
      } catch (err) {
        res.status(500).json(err);
      }
})

router.put("/:id", withAuth, async (req, res) => {
    try {
        const blogData = await Blog.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (blogData) {
            res.status(201).send(blogData)
        } else {
          res.status(400).send('Blog not created')
        }
      } catch (err) {
        res.status(500).json(err);
      }
})

router.delete("/:id", withAuth, async (req, res) => {
    try {
        const data = await Blog.destroy({
            where: {
                id: req.params.id
            }
        });
        if (data) {
            res.status(200).end();
          } else {
            res.status(404).end();
          }
      } catch (err) {
        res.status(500).json(err);
      }
})

module.exports = router;
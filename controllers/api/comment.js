const router = require('express').Router();
const { Comment } = require('../../models'); 

//create a new comment
router.post('/', async (req, res) => {
    try {
      const commentData = await Comment.create(req.body);

      res.status(200).json(commentData);
    } catch (err) {
      res.status(400).json(err);
    }
});

//edit a comment using the id
router.put("/:id", async (req, res) => {

}); 

//delete a blog using the blog_id
router.delete('/:id', async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router; 
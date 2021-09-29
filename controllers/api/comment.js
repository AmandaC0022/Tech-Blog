const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.post("/", withAuth, async (req, res) => {
    try {
        const commentData = await Comment.create(req.body);
        if (commentData) {
            res.status(201).send(commentData)
        } else {
          res.status(400).send('comment not created')
        }
      } catch (err) {
        res.status(500).json(err);
      }
})

router.put("/:id", withAuth, async (req, res) => {
    try {
        const commentData = await Comment.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (commentData) {
            res.status(201).send(commentData)
        } else {
          res.status(400).send('comment not updated')
        }
      } catch (err) {
        res.status(500).json(err);
      }
})

router.delete("/:id", withAuth, async (req, res) => {
    try {
        const data = await Comment.destroy({
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
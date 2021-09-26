// const router = require('express').Router();
// const { Blog } = require('../../models');
// const withAuth = require('../../utils/auth');

// //this is the route to create a new blog
// router.post('/create', withAuth, async (req, res) => {
//   try {
//     const newBlog = await Blog.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newBlog);

//     res.render('create', { 
//       blogs, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// //TO DO: create a PUT request route to update or change an already exsisting blog 

// //this is a path to delete a certain blog 
// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const blogData = await Blog.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!blogData) {
//       res.status(404).json({ message: 'No blog found with this id!' });
//       return;
//     }

//     res.status(200).json(blogData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
const router = require('express').Router();
  
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
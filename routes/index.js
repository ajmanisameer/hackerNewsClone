var express = require('express');
var router = express.Router();
var Post = require('../models/submitModel')
var post_controller = require('../controllers/postController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HackerNews' });
});

router.get('/submit', (req,res) =>  {
  res.render('submit')
})

router.post('/submit', post_controller.post_create_post);

router.get('/posts', post_controller.post_list_get);

// router.post("/submit", (req, res) => {
//   var post = new Post(req.body);
//   post.save();
//   res.status(201).send(post);
// })

// router.post("/new", (req, res) => {
//   var text = req.body.text;
//   res.send(text);
// })

module.exports = router;

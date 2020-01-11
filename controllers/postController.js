var Post = require("../models/submitModel");
// var Comment = require('../models/commentModel')

exports.post_create_post = (req, res) => {
  var post = new Post(req.body);
  post.save();
  res.status(201).send(post);
};

exports.post_list_get = (req, res) => {
  Post.find({}, (err, data) => {
    res.render("posts", { data: data });
  });
};

// exports.post_comment_post = (req, res) => {
//     var comment = new Comment(req.comment);
//     comment.save();
//     res.status(201).send(comment);
// };

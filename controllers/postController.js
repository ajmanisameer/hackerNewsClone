var Post = require('../models/submitModel')

exports.post_create_post = (req,res) => {
    var post = new Post(req.body)
    post.save()
    res.status(201).send(post)
};

exports.post_list_get = (req,res) => {
    Post.find({}, (err,data) => {
        res.render('posts', { data:data })
    })
}

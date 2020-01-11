var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var obj = new Schema({
    title: {type: String, required: true},
    url: {type: String, required: true},
    text: {type: String, required: true}
    // comments: [{ type:Schema.Types.ObjectId, ref: 'Comments', required: true}]
    
});

// var comobj = new mongoose.Schema({
//     comment: { type: String }
// });

// obj.virtual('url').get(function(){
//     return '/index/posts/'+this._id;
// })




module.exports = mongoose.model('posts', obj)
// module.exports = mongoose.model('Comments', comobj)

const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({

    content:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'   //refer to schema user

    }
},{
    timestamps:true
});

const Post=mongoose.model('Post',postSchema);
module.exports = Post;
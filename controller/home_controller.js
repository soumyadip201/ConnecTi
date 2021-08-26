const Post = require('../models/post');

module.exports.home = function (req, res) {
    //return res.end('<h1>Express is up for ConnecTi</h1>');

    // Post.find({},function(err,posts) {
        
    //     return res.render('home', {
    //         title: "CoonecTi | Home",
    //         posts:posts
    //     });

    // });

    //populate the user of each user
    Post.find({}).populate('user').exec(function(err,posts){

        return res.render('home', {
            title: "CoonecTi | Home",
            posts:posts
        });
    });
}

//module.exports.actionName = function (req, res) {}
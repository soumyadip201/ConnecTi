const User = require('../models/user');


module.exports.profile = function (req, res) {

    return res.render('user_profile', {

        title: "Profile"
    })
    //return res.end('<h1>User Profile</h1>');
}

//rendered the signup page
module.exports.signup = function (req, res) {

    if (req.isAuthenticated()) {
        return res.redirect('/user/profile')
    }
    return res.render('user_signup', {
        title: "ConnecTi | Sign up"
    });
}


//rendered the signin page
module.exports.signin = function (req, res) {

    if (req.isAuthenticated()) {
        return res.redirect('/user/profile')
    }

    return res.render('user_signin', {
        title: "ConnecTi | Sign in"
    })
}

//get the signup data
module.exports.create = function (req, res) {

    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }

    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) { console.log("Error in signup"); return; }

        if (!user) {
            User.create(req.body, function (err, user) {
                if (err) { console.log("Error in signup"); return; }

                return res.redirect('/user/sign-in');
            });
        } else {
            return res.redirect('back');
        }
    });
}

//sign in and create a session for user
module.exports.createSession = function (req, res) {

    return res.redirect('/');
}

module.exports.destroySession = function (req, res) {
    req.logout();
    return res.redirect('/');
}
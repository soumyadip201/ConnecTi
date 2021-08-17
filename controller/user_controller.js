module.exports.profile = function (req, res) {

    return res.render('user_profile', {

        title: "Profile"
    })
    //return res.end('<h1>User Profile</h1>');
}

//rendered the signup page
module.exports.signup = function (req, res) {
    return res.render('user_signup', {
        title: "ConnecTi | Sign up"
    })
}


//rendered the signin page
module.exports.signin = function (req, res) {
    return res.render('user_signin', {
        title: "ConnecTi | Sign in"
    })
}

//get the signup data
module.exports.create = function (req, res) { }

//sign in and create a session for user
module.exports.createSession = function (req, res) { }


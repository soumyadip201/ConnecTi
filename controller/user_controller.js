module.exports.profile = function (req, res) {

    return res.render('user_profile', {

        title: "Profile"
    })
    //return res.end('<h1>User Profile</h1>');
}
//npm install passport
//npm install passport-local
const passport = require('passport');

//use uppercase for variable page as it is said by passport.js
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user')

//authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email'
},
    function (email, password, done) {      //don=callbackback function
        //find a user and establish identity
        User.findOne({ email: email }, function (err, user) {
            if (err) {
                console.log("Error in finding user -->passport");
                return done(err);
            }

            if (!user || user.password != password) {
                return console.log("Invalid Username or password");
                return done(null, false);   //done takes 2 arguments --> err and status  -->here err=null as there is no error but the is and pass has not matched and so status is false 
            }

            return done(null, user);

        })

    }

));

//serializing the user to decide which key to be kept in  cookie

passport.serializeUser(function (user, done) {
    done(null, user.id);

});

//deserializing the user from the key in cookie
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        if (err) {
            console.log("Error in finding user -->passport");
            return done(err);
        }

        return done(null, user);
    });
});

module.exports = passport;
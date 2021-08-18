//Layouts => npm install express-ejs-layouts 
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayout = require('express-ejs-layouts');
const mongoosedb = require('./config/mongoose');

//npm install express-session
//used for session cookie and authentication
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');


app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

//we have write before route as in route those views are going to be rendered 
//so before that we have to tell that all the views that will be rendered belong to some sort of a layout or a function what layout is
app.use(expressLayout);

//extract style and scripts from sub-pages into the layout.ejs
app.set('layout extractStyles', true); //for css
app.set('layout extractScripts', true); //for js




//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    name: 'ConnecTi',
    //todo change the secret before development to production mode
    secret: 'shutup',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

//use express routers
app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) { console.log(`Error in running the server : ${err}`); }
    console.log(`Server is up and running on port: ${port}`);
});
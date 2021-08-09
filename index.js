//Layouts => npm install express-ejs-layouts 

const express = require('express');
const app = express();
const port = 8000;
const expressLayout = require('express-ejs-layouts');

//we have write before route as in route those views are going to be rendered 
//so before that we have to tell that all the views that will be rendered belong to some sort of a layout or a function what layout is
app.use(expressLayout);

//use express routers
app.use('/', require('./routes'));

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function (err) {
    if (err) { console.log(`Error in running the server : ${err}`); }
    console.log(`Server is up and running on port: ${port}`);
});
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/connecti_development', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const db = mongoose.connection;

db.on('error', function (err) {

    console.log('Error in connecting :', err.message);

});

//up and running then print the message
db.once('open', function () {

    console.log("Successfully connected to the database :: MongoDB");

});

module.exports = db;
const express = require('express');

const router = express.Router();
const homeController = require('../controller/home_controller');

console.log('router loaded....');

router.get('/', homeController.home);       //for simple => default =>goes to home_controller in controller file
router.use('/user', require('./users'));   //for any request =>   /users/(any_filee)  =>got to users.js and then from that router to controller file


//for any further routes,access from here
//router.use('/routerName',require('/routerfile'));

module.exports = router;
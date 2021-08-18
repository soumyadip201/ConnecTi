const express = require('express');

const router = express.Router();
const usersController = require('../controller/user_controller');

router.get('/profile', usersController.profile);

router.get('/sign-up', usersController.signup);

router.get('/sign-in', usersController.signin);

router.post('/create', usersController.create);
router.post('/create-session', usersController.createSession);
router.post('/end-session', usersController.endSession);

module.exports = router;
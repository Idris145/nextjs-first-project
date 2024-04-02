const express = require('express');
const jwt = require('../../lib/auth/jwt');
const UserController = require('./user.controller');
const { errorWrapper } = require('../../lib/error/errorWrapper');

const router = express.Router();

router.post('/register', errorWrapper(UserController.Register));
router.post('/login', errorWrapper(UserController.Login));
module.exports = router;

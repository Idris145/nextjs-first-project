const express = require('express');
const jwt = require('../../lib/auth/jwt');
const UserController = require('./user.controller');
const { errorWrapper } = require('../../lib/error/errorWrapper');
const router = express.Router();

router.post('/register', errorWrapper(UserController.Register));
router.post('/login', errorWrapper(UserController.Login));
router.get('/me', jwt.authenticateAccessToken, errorWrapper(UserController.Me));
router.get('/refresh', jwt.authenticateRefreshToken, errorWrapper(UserController.Refresh));

module.exports = router;

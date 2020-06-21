const express = require('express');

const authController = require('./../controllers/auth');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);
router.get('/getUser', authController.getMe, authController.getUser);
router.patch('/updateMyPassword', authController.updatePassword);

module.exports = router;
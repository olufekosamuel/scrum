const express = require('express');

const authController = require('./../controllers/auth');
const scrumyController = require('./../controllers/scrumy');

const router = express.Router();


// Protect all routes after this middleware
router.use(authController.protect);
router
    .route('/')
    .post(competitionController.create)
    .get(competitionController.fetchAll);

router
    .route('/:id')
    .patch(competitionController.update)
    .delete(competitionController.delete)
    .get(competitionController.fetchOne);


module.exports = router;
const express = require('express');
const router = express.Router();
const {addStar, removeStar} = require('../controllers/starController')


router.post('/add', addStar);

router.delete('/remove', removeStar);

module.exports = router;

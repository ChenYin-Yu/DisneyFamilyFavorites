const express = require('express');
const recommendationController = require('../controllers/recommendationController')

const router = express.Router(); 
// recommendation routes
router.get('/', recommendationController.recommendation_index)
router.post('/', recommendationController.recommendation_create_post)
router.get('/create', recommendationController.recommendation_create_get)
router.get('/:id', recommendationController.recommendation_details)
router.delete('/:id', recommendationController.recommendation_delete)


module.exports = router;
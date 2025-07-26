const express = require('express')
const router = express.Router()
const newsController = require('../controllers/newsController')

router.get('/all', newsController.getAllNews)
router.get('/:category', newsController.getCategoryNews)
router.get('/id/:id', newsController.getNewsById)

module.exports = router

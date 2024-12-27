const express = require('express');
const router = express.Router();
const { addNewReview } = require('../controllers/reviewsController');
const Review = require('../models/Review');
const Visitor = require('../models/Visitor');
const Attraction = require('../models/Attraction');
const reviewsController = require('../controllers/reviewsController');

// Add new review
router.post('/', reviewsController.addNewReview);

module.exports = router; 
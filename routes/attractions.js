const express = require('express');
const router = express.Router();
const { addNewAttraction, getTopRatedAttractions } = require('../controllers/attractionsController');
const Attraction = require('../models/Attraction');

// Add new attraction
router.post('/', async (req, res) => {
  try {
    const newAttraction = new Attraction(req.body);
    await newAttraction.save();
    res.status(201).send(newAttraction);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get top-rated attractions
router.get('/top-rated', async (req, res) => {
  const topAttractions = await Attraction.find().sort({ rating: -1 }).limit(5);
  res.send(topAttractions);
});

module.exports = router; 
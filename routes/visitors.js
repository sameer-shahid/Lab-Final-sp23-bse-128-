const express = require('express');
const router = express.Router();
const { addNewVisitor, getVisitorActivity } = require('../controllers/visitorsController');
const Visitor = require('../models/Visitor');

// Add new visitor
router.post('/', addNewVisitor);

// Get visitor activity
router.get('/activity', getVisitorActivity);

// Record a visit to an attraction
router.post('/:visitorId/visit', async (req, res) => {
  const { visitorId } = req.params;
  const { attractionId } = req.body;

  try {
    const visitor = await Visitor.findById(visitorId);
    if (!visitor) {
      return res.status(404).send('Visitor not found');
    }

    // Add the attraction to the visited list if not already visited
    if (!visitor.visitedAttractions.includes(attractionId)) {
      visitor.visitedAttractions.push(attractionId);
      await visitor.save();
    }

    res.status(200).send('Visit recorded');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router; 
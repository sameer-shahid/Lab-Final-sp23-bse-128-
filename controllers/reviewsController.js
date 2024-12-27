const Review = require('../models/Review');
const Attraction = require('../models/Attraction');
const Visitor = require('../models/Visitor');
const mongoose = require('mongoose');

exports.addNewReview = async (req, res) => {
  const { attractionId, visitorId, score, comment } = req.body;

  // Validate ObjectIds
  if (!mongoose.Types.ObjectId.isValid(visitorId) || !mongoose.Types.ObjectId.isValid(attractionId)) {
    return res.status(400).json({ error: 'Invalid visitorId or attractionId' });
  }

  try {
    const visitor = await Visitor.findById(visitorId);
    const attraction = await Attraction.findById(attractionId);

    if (!visitor || !attraction) {
      return res.status(404).json({ error: 'Visitor or Attraction not found' });
    }

    // Ensure the visitor has visited the attraction before allowing a review
    if (!visitor.visitedAttractions.includes(attraction._id)) {
      return res.status(400).json({ error: 'Visitor has not visited this attraction' });
    }

    const review = await Review.create({
      attraction: attraction._id,
      visitor: visitor._id,
      score,
      comment
    });

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 
const Attraction = require('../models/Attraction');

exports.addNewAttraction = async (req, res) => {
  try {
    const attraction = await Attraction.create(req.body);
    res.status(201).json(attraction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTopRatedAttractions = async (req, res) => {
  try {
    const attractions = await Attraction.find()
      .sort({ rating: -1 })
      .limit(5);
    res.json(attractions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 
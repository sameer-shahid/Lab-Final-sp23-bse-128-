const Visitor = require('../models/Visitor');
const Review = require('../models/Review');

exports.addNewVisitor = async (req, res) => {
  try {
    const visitor = await Visitor.create(req.body);
    res.status(201).json(visitor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getVisitorActivity = async (req, res) => {
  try {
    const visitors = await Review.aggregate([
      {
        $group: {
          _id: '$visitor',
          reviewCount: { $sum: 1 }
        }
      },
      {
        $lookup: {
          from: 'visitors',
          localField: '_id',
          foreignField: '_id',
          as: 'visitorInfo'
        }
      }
    ]);
    res.json(visitors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 
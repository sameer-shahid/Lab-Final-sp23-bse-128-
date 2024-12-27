const express = require('express');
const mongoose = require('mongoose');
const attractionsRouter = require('./routes/attractions');
const visitorsRouter = require('./routes/visitors');
const reviewsRouter = require('./routes/reviews');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/tourism', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Use routes
app.use('/attractions', attractionsRouter);
app.use('/visitors', visitorsRouter);
app.use('/reviews', reviewsRouter);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

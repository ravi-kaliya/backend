const express = require('express');
const { getBlogsByCategory } = require('../controllers/blogController');
const verifyToken = require('../middlewares/verifyToken');
const Airbnb = require('../models/blogs');
const router = express.Router();

// Route to get blogs by category
router.get('/:category',  getBlogsByCategory);
// router.get('/Rustic', getBlogsByCategory);


// POST: Create a new blog
router.post('/', async (req, res) => {
  try {
    const newBlog = new Airbnb(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error creating blog', error });
  }
});

module.exports = router;

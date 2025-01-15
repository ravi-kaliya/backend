const Blog = require('../models/blogs');

// Service to fetch blogs by category
const findBlogsByCategory = async (category) => {
  return await Blog.find({ type: category });
};

module.exports = { findBlogsByCategory };

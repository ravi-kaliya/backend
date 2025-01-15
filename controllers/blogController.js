const BlogService = require('../services/blogService');

// Controller to get blogs by category
const getBlogsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const blogs = await BlogService.findBlogsByCategory(category);

    if (blogs.length === 0) {
      return res.status(404).json({ message: 'No blogs found for the given category.' });
    }

    res.status(200).json({ status: 'success', data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getBlogsByCategory };

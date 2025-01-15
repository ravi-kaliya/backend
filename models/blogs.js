const mongoose = require('mongoose');

// Define the schema with collection name as 'blogs'
const airbnbSchema = new mongoose.Schema({
  image: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: String, required: true },
  hostImage: { type: String, required: true },
  email: { type: String, required: true, unique: true } // Assuming email should be unique
}, { collection: 'blogs' }); // Specify the collection name

// Create the model based on the schema
const Airbnb = mongoose.model('Airbnb', airbnbSchema);

module.exports = Airbnb;

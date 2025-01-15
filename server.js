const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const verifyToken = require('./middlewares/verifyToken'); 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Define CORS options
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:3004',  // The frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed methods
  credentials: true,  // Allow cookies to be sent
};
console.log(process.env.CLIENT_URL)
// Use CORS middleware with custom options
app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());


// Connect to Database
connectDB();

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://192.168.1.79:${PORT}`);
});

module.exports = app; // Ensure the app is exported for live on vercel




// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Connect to Database
// console.log('My DB');
// connectDB();
// console.log('My DB2');

// // Routes
// app.get('/', (req, res) => {
//     res.send('Welcome to the server!');
// });

// // Routes
// app.use('/api/auth', authRoutes);

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

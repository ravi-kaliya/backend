// const http = require('http');
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');
// const blogRoutes = require('./routes/blogRoutes');
// const verifyToken = require('./middlewares/verifyToken');

// dotenv.config();

// const app = express();

// // Define CORS options
// const corsOptions = {
//   origin: process.env.CLIENT_URL || 'http://localhost:3004',  // The frontend URL
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed methods
//   credentials: true,  // Allow cookies to be sent
// };

// // Use CORS middleware with custom options
// app.use(cors(corsOptions));

// // Middleware
// app.use(bodyParser.json());

// // Connect to Database
// connectDB();

// // Routes
// app.get('/', (req, res) => {
//   res.send('Welcome to the server!');
// });

// app.use('/api/auth', authRoutes);
// app.use('/api/blogs', blogRoutes);
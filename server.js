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

<<<<<<< HEAD
// const app = express();

// // Define CORS options
// const corsOptions = {
//   origin: process.env.CLIENT_URL || 'http://localhost:3004',  // The frontend URL
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed methods
//   credentials: true,  // Allow cookies to be sent
// };

// // Use CORS middleware with custom options
// app.use(cors(corsOptions));
=======
const app = express();
const url = process.env.URL || 'http://localhost:3004';

// Define CORS options
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:3004',  // The frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed methods
  credentials: true,  // Allow cookies to be sent
};
// Use CORS middleware with custom options
app.use(cors(corsOptions));
>>>>>>> 950c19b2496e2a509f7db3364fee564a1110a410

// // Middleware
// app.use(bodyParser.json());

// // Connect to Database
// connectDB();

<<<<<<< HEAD
// // Routes
// app.get('/', (req, res) => {
//   res.send('Welcome to the server!');
// });

// app.use('/api/auth', authRoutes);
// app.use('/api/blogs', blogRoutes);
=======
@@ -37,46 +37,10 @@ app.get('/', (req, res) => {
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

// Create an HTTP server
const server = http.createServer(app);
// Start Server
server.listen(url, () => {
  console.log(`Server running on ${url}`);
});
>>>>>>> 950c19b2496e2a509f7db3364fee564a1110a410

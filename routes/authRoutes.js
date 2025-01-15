const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const cookieParser = require('cookie-parser');  // Import cookie-parser middleware
const router = express.Router();

const JWT_SECRET = "vandna12345";

// Middleware for cookie parsing
router.use(cookieParser());

// Signup Route
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
    
        // Check if email already exists
        const existingUser = await User.findOne({ email });
        console.log(existingUser)
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered please log in' });
        }

        // Hash password before saving it
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.json({ message: 'Server error', error });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found sign up first' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Set the JWT token in a cookie
        res.cookie('token', token, {
            httpOnly: true, // Prevents JavaScript access to the cookie
            secure: process.env.NODE_ENV === 'production',  
            maxAge: 3600000, // 1 hour in milliseconds
            sameSite: 'Strict', // or 'Lax' depending on your needs
        });

        // Send success response
        res.json({ message: 'Login successful', username: user.username });
    } catch (error) {
        console.error('Login error:', error); // Log the actual error
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Protected Route (Example, to verify the token)
// router.get('/protected', async (req, res) => {
//     try {
//         // Get the token from the cookie
//         const token = req.cookies.token;
        
//         if (!token) {
//             return res.status(401).json({ message: 'No token provided' });
//         }

//         // Verify the token
//         const decoded = jwt.verify(token, JWT_SECRET);
//         const user = await User.findById(decoded.userId);
        
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         res.json({ message: 'Protected content', username: user.username });
//     } catch (error) {
//         console.error('Protected route error:', error);
//         res.status(500).json({ message: 'Server error', error: error.message });
//     }
// });

module.exports = router;





// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const router = express.Router();

// const JWT_SECRET = "vandna12345";
// // Signup Route
// router.post('/signup', async (req, res) => {
//     try {
//         const { username, email, password } = req.body;

//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: 'Email already registered' });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({ username, email, password: hashedPassword });
//         await newUser.save();

//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//         res.json({ message: 'Server error', error });
//     }
// });

// // Login Route
// router.post('/login', async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Validate input
//         if (!email || !password) {
//             return res.status(400).json({ message: 'Email and password are required' });
//         }

//         // Find user by email
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Compare passwords
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }

//         // Generate JWT token
//         const token = jwt.sign(
//             { userId: user._id, email: user.email },
//             JWT_SECRET,
//             { expiresIn: '1h' }
//         );

//         // Send success response
//         res.json({ message: 'Login successful', token, username: user.username });
//     } catch (error) {
//         console.error('Login error:', error); // Log the actual error
//         res.status(500).json({ message: 'Server error', error: error.message });
//     }
// });

// module.exports = router;

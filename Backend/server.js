const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectMongoDB } = require('./DB/index');
const { DB_NAME } = require('./constants.js');
const User = require('./models/user.model');

dotenv.config();
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.urlencoded({ extended: true }));

connectMongoDB(`${process.env.MONGODB_URI}${DB_NAME}`)
    .then(() => console.log('MongoDB is connected successfully'))
    .catch((error) => console.log("Error connecting to MongoDB:", error));

app.get('/', (req, res) => {
    res.json({ message: 'Server is running' });
});

app.post('/auth/register', async (req, res) => {
    try {
        const { email, password, name } = req.body;

        if (!email || !password || !name) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }

        const user = new User({
            name,
            email,
            password
        });

        await user.save();

        const token = user.generateAuthToken();

        const userResponse = user.toObject();
        delete userResponse.password;

        res.status(201).json({
            message: 'User registered successfully',
            user: userResponse,
            token
        });

    } catch (error) {
        console.error('Registration error:', error);
        console.log(error)
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = user.generateAuthToken();

        const userResponse = user.toObject();
        delete userResponse.password;

        res.json({
            message: 'Login successful',
            user: userResponse,
            token
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
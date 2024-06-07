const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Used to create predictable auto-incrementing IDs for the stepId field on the Step model
const AutoIncrementFactory = require('mongoose-sequence');

// Load environment variables from .env file
dotenv.config();

// MongoDB connection URI
const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mythweaver';

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected successfully');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Initialize AutoIncrement
const AutoIncrement = AutoIncrementFactory(mongoose.connection);

// Export the database connection and the AutoIncrement function
module.exports = {
    connection: mongoose.connection,
    AutoIncrement,
};

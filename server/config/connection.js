const mongoose = require('mongoose');

// Used to create predictable autoincrementing IDs for the stepId field on the Step model
const AutoIncrementFactory = require('mongoose-sequence');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mythweaver', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const AutoIncrement = AutoIncrementFactory(mongoose.connection);

// Export the database connection and the AutoIncrement function
module.exports = {
    connection: mongoose.connection,
    AutoIncrement,
};
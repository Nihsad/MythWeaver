const { Schema } = require('mongoose');

const authorInfoSchema = new Schema(
    {
        casualReaderRate: {
            type: Number,
            default: 0,
        },
        stalwartSupporterRate: {
            type: Number,
            default: 0,
        },
        loyalDevoteeRate: {
            type: Number,
            default: 0,
        },
        createdStories: [{
            type: Schema.Types.ObjectId,
            ref: 'Story',
        }],
    },
);

module.exports = authorInfoSchema;
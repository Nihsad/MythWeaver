const { Schema } = require('mongoose');

const authorInfoSchema = new Schema(
    {
        createdStories: [{
            type: Schema.Types.ObjectId,
            ref: 'Story',
        }],
    },
);

module.exports = authorInfoSchema;
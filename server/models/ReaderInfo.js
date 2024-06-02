const { Schema } = require('mongoose');

const readerInfoSchema = new Schema(
    {
        purchasedStories: [{
            type: Schema.Types.ObjectId,
            ref: 'Story',
        }],
        playedStories: [{
            storyId: { type: Schema.Types.ObjectId, ref: 'Story' },
            // The rating that this particular user gave the story they played
            rating: { type: Number, min: 1, max: 5 },
        }],
    },
);

module.exports = readerInfoSchema;
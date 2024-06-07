const { Schema } = require('mongoose');

const readerInfoSchema = new Schema(
    {
        purchasedStories: [{
            type: Schema.Types.ObjectId,
            ref: 'Story',
            default: [],
        }],
        bookmarkedStories: {
            type: [{
                storyId: { type: Schema.Types.ObjectId, ref: 'Story' },
                // The rating that this particular user gave the story they played and saved. The idea is to give the user the option to save a story at the page they go to after they complete the story. That page would have a 'Save Story' button. 
                // It is possible a user could save a story without rating it. Need to be able to handle the rating being null.
                rating: { type: Number, min: 1, max: 5 },
            }],
            default: [],
        },
        toBeReadStories: [{
            type: Schema.Types.ObjectId, 
            ref: 'Story',
            default: [],
        }],
    },
);

module.exports = readerInfoSchema;
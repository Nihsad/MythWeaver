const { Schema } = require('mongoose');

const readerInfoSchema = new Schema(
    {
        // purchaseStories should only refer to stories that have the One-Time-Payment paymentModel, which the user has purchased.
        purchasedStories: [{
            type: Schema.Types.ObjectId,
            ref: 'Story',
        }],
        subscriptions: [{
            authorId: { type: Schema.Types.ObjectId, ref: 'User' },
            plan: { type: String, enum: ['Casual Reader', 'Stalwart Supporter', 'Loyal Devotee'] },
        }],
        playedStories: [{
            storyId: { type: Schema.Types.ObjectId, ref: 'Story' },
            // The rating is here in order to store this user's rating of this particular story they played/read, where 1 = terrible and 10 = amazing. If we want a user dashboard where the user can see snapshots of the stories they've created and played, we could use this rating field in order to display something like, "You played such and such story and rated it such and such number."
            rating: { type: Number, min: 1, max: 10 },
        }],
        toReadList: [{
            type: Schema.Types.ObjectId,
            ref: 'Story',
        }],
    },
);

module.exports = readerInfoSchema;
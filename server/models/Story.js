const { Schema, model } = require('mongoose');

const storySchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        // Change this back when ready
        // author: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'User',
        //     required: true,
        // },
        author: {
            type: String, 
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        publishedDate: {
            type: Date,
            default: Date.now,
        },
        steps: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Step'
            },
        ],
        reviews: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Review'
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
);

// Average rating calculated from all the 1-5 ratings users have given this story.
storySchema.virtual('averageRating').get(function () {
    if (this.reviews.length === 0) {
        return 0;
    }

    // ratingsTotal uses the reduce method to get the total of all ratings users have given this story. The acc is initialized at 0.
    const ratingsTotal = this.reviews.reduce((acc, review) => acc + review.rating, 0);
    return ratingsTotal / this.reviews.length;
});

// The number of users who have left a rating for this story
storySchema.virtual('ratingsCount').get(function () {
    // This works since rating is a required field on the review model
    return this.reviews.length;
});

const Story = model('Story', storySchema);

module.exports = Story;

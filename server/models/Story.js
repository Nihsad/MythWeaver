const { Schema, model } = require('mongoose');
const stepSchema = require('./Step');
const reviewSchema = require('./Review');

const storySchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        description: {
            type: String,
        },
        imageUrl: {
            type: String,
        },
        // I'm thinking that the possible values for storyStyle could be called soloAdventure (web style, story is prewritten with options that define outcomes), coWritten (story is written as votes are cast, with the author providing the choices), and readerDriven (story is written as votes are cast, with the readers providing the choices)
        storyStyle: {
            type: String, 
        },
        genre: {
            type: String,
        },
        tags: [String],
        // 1 = PG, 10 = Rated R or NC-17, something along those lines
        maturityLevel: {
            type: Number,
            min: 1,
            max: 10,
        },
        publishedDate: {
            type: Date,
            default: Date.now,
        },
        lastUpdatedDate: {
            type: Date,
            default: Date.now,
        },
        steps: [stepSchema],
        reviews: [reviewSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
);

// Average rating calculated from all the 1-10 ratings users have given this story.
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
    // This works since rating is a required field on the reviewSchema
    return this.reviews.length;
});

const Story = model('Story', storySchema);

module.exports = Story;

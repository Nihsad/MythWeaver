const reviewSchema = new Schema(
    {
        // This is weird. 
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true,
        },
        reviewText: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
);

module.exports = reviewSchema;
const reviewSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        rating: {
            type: Number,
            min: 1,
            max: 10,
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
const { Schema } = require('mongoose');
const choiceSchema = require('./Choice');

const stepSchema = new Schema(
    {
        stepText: {
            type: String,
            required: true,
        },
        choices: [choiceSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// This is very early brainstorming, not sure how to do the votes yet.
// stepSchema.virtual('winningChoice').get(function () {
//     const choiceOneVotes = this.choices[0].votes;
//     const choiceTwoVotes = this.choices[1].votes;
//     const choiceThreeVotes = this.choices[2].votes;
//     const choiceFourVotes = this.choices[3].votes;
// });

module.exports = stepSchema;
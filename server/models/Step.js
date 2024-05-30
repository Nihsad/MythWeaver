const { Schema, model } = require('mongoose');
const choiceSchema = require('./Choice');

const stepSchema = new Schema(
    {
        stepVersion: {
            type: Number,
        },
        stepText: {
            type: String,
            required: true,
        },
        choices: {
            type: [choiceSchema],
            validate: {
                // There must be a min of 2, max of 10 choices
                validator: function (choicesArray) {
                    return choicesArray.length >= 2 && choicesArray.length <= 10;
                },
                message: props => `The number of choices (${props.value.length}) is not between 2 and 10.`,
            },        },
        votingOpen: {
            type: Boolean, 
            default: true,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
);

// Method to add a vote to a choice. choiceId needs to be the ObjectId of the choice
stepSchema.methods.voteForChoice = async function (choiceId) {
    // The id() method finds a subdocument within its array by its _id property
    const choice = this.choices.id(choiceId);
    if (choice && this.votingOpen) {
        choice.votes += 1;
        await this.save();
    } else {
        throw new Error('Voting is closed or choice not found');
    }
};

// Method to close voting
stepSchema.methods.closeVoting = async function () {
    this.votingOpen = false;
    await this.save();
};

// Static method to get the winning choice for a step
stepSchema.statics.getWinningChoice = async function (stepId) {
    const step = await this.findById(stepId);
    if (step && !step.votingOpen) {
        // max is the accumulator param, choice is the currentValue param. step.choices[0] is the initialValue for the reduce method. 
        return step.choices.reduce((max, choice) => max.votes > choice.votes ? max : choice, step.choices[0]);
    } else {
        throw new Error('Voting is still open or step not found');
    }
};

const Step = model('Step', stepSchema);

module.exports = Step;
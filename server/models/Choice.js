const { Schema } = require('mongoose');

const choiceSchema = new Schema(
    {
        choiceText: {
            type: String,
            required: true,
        },
        // nextStep is the step that the user sees next if they pick this choice
        nextStep: {
            type: Schema.Types.ObjectId,
            ref: 'Step',
        },
        // votes is not a required field since it's N/A for the first story type
        votes: {
            type: Number, 
        }
    }
);

module.exports = choiceSchema;
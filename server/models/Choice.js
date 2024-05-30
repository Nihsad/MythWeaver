const { Schema } = require('mongoose');

const choiceSchema = new Schema(
        // Choice doesn't become a model, but it since it is made as an array of subdocuments in the Story model, mongoose will still automatically generate an _id for each choice. 
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
        votes: {
            type: Number, 
            default: 0,
        },
    },
);

module.exports = choiceSchema;
const { Schema, model } = require('mongoose');
const { AutoIncrement } = require('../config/connection');
const choiceSchema = require('./Choice');

const stepSchema = new Schema(
    {
        // Custom ID which autoincrements starting from 1. Uses mongoose-sequence plugin.
        stepId: {
            type: Number,
            unique: true,
        },
        stepText: {
            type: String,
            required: true,
        },
        type: {
            type: String, 
            enum: ['continuing', 'ending'], 
            required: true,
        },
        choices: {
            type: [choiceSchema],
            validate: {
                // 'continuing' steps must have 3 choices, and 'ending' steps must not have choices
                validator: function (choicesArray) {
                    if (this.type === 'continuing') {
                        return Array.isArray(choicesArray) && choicesArray.length === 3;
                    } else if (this.type === 'ending') {
                        return choicesArray === undefined || choicesArray.length === 0;
                    }
                },
                message: function (props) {
                    if (this.type === 'continuing') {
                        return `The number of choices (${props.value ? props.value.length : 0}) is not 3.`;
                    } else if (this.type === 'ending') {
                        return `Choices should not be provided for 'ending' steps.`;
                    }
                },
            },
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
);

stepSchema.plugin(AutoIncrement, { inc_field: 'stepId' });

const Step = model('Step', stepSchema);

module.exports = Step;
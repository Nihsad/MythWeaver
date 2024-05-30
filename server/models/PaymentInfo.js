const { Schema } = require('mongoose');

const paymentInfoSchema = new Schema(
    {
        paymentModel: {
            type: String,
            enum: ['Free', 'One-Time-Payment', 'Casual Reader', 'Stalwart Supporter', 'Loyal Devotee'],
            required: true,
        },
        oneTimePaymentPrice: {
            type: Number,
            // the function will return true if the paymentModel is 'One-Time-Payment', making this field required only if paymentModel is 'One-Time-Payment'
            required: function () { return this.paymentModel === 'One-Time-Payment' },
        },
    },
);

module.exports = paymentInfoSchema;
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            validate: {
                validator: function (email) {
                    // Regex pattern used to check if email is valid
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                },
                message: "Please enter a valid email",
            },
        },
        password: {
            type: String,
            required: true,
            trim: true,
            validate: {
                validator: function (password) {
                    // Regex pattern used to check if password is strong enough. Requirements: at least 8 char long, at least 1 lowercase letter, at least 1 uppercase letter, at least 1 digit, at least 1 special char
                    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
                },
                message: "Please enter a valid password",
            },
        },
        createdStories: [{
            type: Schema.Types.ObjectId,
            ref: 'Story',
        }],
        playedStories: [{
            storyId: { type: Schema.Types.ObjectId, ref: 'Story' },
            // The rating is here in order to store this user's rating of this particular story they played/read, where 1 = terrible and 10 = amazing. If we want a user dashboard where the user can see snapshots of the stories they've created and played, we could use this rating field in order to display something like, "You played such and such story and rated it such and such number."
            rating: { type: Number, min: 1, max: 10 },
        }],
        toReadList: [{
            type: Schema.Types.ObjectId,
            ref: 'Story',
        }],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// Method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// Virtual property which stores the number of stories the user has created. Can remove if we don't end up using it. 
userSchema.virtual('createdStoriesCount').get(function () {
    return this.createdStories.length;
});

// Virtual property which stores the number of stories the user has read/played. Can remove if we don't end up using it. 
userSchema.virtual('playedStoriesCount').get(function () {
    return this.playedStories.length;
});

const User = model('User', userSchema);

module.exports = User;
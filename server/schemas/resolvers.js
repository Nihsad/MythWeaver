const { User, Story, Step, Review } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_51PMLWzAHauJOQVmCMzjCdQJsYgF833SAFm3Yu9pkVnU4MNlg5U05bivhr1HQQlzOLx4mr9ahdYVIssEMSXxJzGOQ00IqrU8sTo');

// Testing Server- Haleigh
const resolvers = {
    Query: {
        profile: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw AuthenticationError;
        },

        stories: async () => {

            const stories = await Story.find().sort('-createdAt').limit(6);

            return stories;
        },

        story: async (parent, { storyId }) => {
            try {
                const story = await Story.findOne({ _id: storyId })
                    .populate({
                        path: 'reviews',
                        populate: {
                            path: 'username',
                            model: 'User',
                        },
                    })
                    .populate({
                        path: 'steps',
                        populate: {
                            path: 'choices'
                        },
                    });

                return story;
            } catch (err) {
                console.error(err);
                throw err;
            }
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPassword = await user.isCorrectPassword(password);

            if (!correctPassword) {
                throw AuthenticationError;
            }

            const token = signToken(user);
            return { token, user };
        },
        addStory: async (parent, { input }, context) => {
            try {

                if (!context.user) {
                    throw AuthenticationError;
                }

                console.log(input);

                const stepIds = [];

                for (const step of input.steps) {
                    const newStep = await Step.create(step);
                    stepIds.push(newStep._id);
                }

                const story = await Story.create({
                    title: input.title,
                    author: input.author,
                    description: input.description,
                    imageUrl: input.imageUrl,
                    price: input.price,
                    genre: input.genre,
                    tags: input.tags,
                    steps: stepIds
                });

                console.log('The next console log that follows is your story._id from addStory in resolvers.js.')
                console.log(story._id);

                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { 'authorInfo.createdStories': story._id } },
                    { new: true }
                )

                const createdStory = await Story.findById(story._id)
                    .populate('steps')
                    .populate('reviews')
                    .exec();

                // Finding the created story and populating steps and reviews allows us to make stepId non-nullable while avoiding 'cannot return null for non-nullable field' errors.
                return createdStory;

            } catch (err) {
                console.error(err);
                throw new Error('There was an error when attempting to add a new story.');
            }
        },

        addToTBR: async (parent, { storyId }, context) => {
            if (!context.user) {
                throw AuthenticationError;
            }

            try {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { 'readerInfo.toBeReadStories': storyId } },
                    { new: true }
                );

                return updatedUser;

            } catch (err) {
                throw new Error(err);
            }
        },

        addToBookmarks: async (parent, { storyId }, context) => {
            if (!context.user) {
                throw AuthenticationError;
            }

            try {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { 'readerInfo.bookmarkedStories': storyId } },
                    { new: true }
                );

                return updatedUser;

            } catch (err) {
                throw new Error(err);
            }
        },

        addReview: async (parent, { input }, context) => {
            if (!context.user) {
                throw AuthenticationError;
            }

            try {
                const review = await Review.create({
                    username: input.username,
                    rating: input.rating,
                    reviewText: input.reviewText,
                });

                const updatedStory = await Story.findOneAndUpdate(
                    { _id: input.storyId },
                    { $addToSet: { reviews: review._id } },
                    { new: true }
                );
                return review;
            } catch (err) {
                throw new Error(err);
            }

        },
    },
};

module.exports = resolvers;

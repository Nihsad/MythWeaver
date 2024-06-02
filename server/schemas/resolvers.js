const { User, Story, Step, Review } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

// Testing Server- Haleigh
const resolvers = {
    Query: {
        stories: async () => {
            return Story.find();
        },
        story: async (parent, { _id }) => {
            try {
                const story = await Story.findById(_id)
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
        addStory: async (parent, { title, author, description, imageUrl, price, steps }, context) => {
            try {
                console.log({ title, author, description, imageUrl, price, steps });

                const stepIds = [];

                for (step of steps) {
                    const newStep = await Step.create(step);
                    stepIds.push(newStep._id);
                }

                const story = await Story.create({
                    title,
                    author,
                    description,
                    imageUrl,
                    price,
                    steps: stepIds
                });
                return story;
            } catch (err) {
                console.error(err);
                throw err;
            }
        },
    },
};

module.exports = resolvers;

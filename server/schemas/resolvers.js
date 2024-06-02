const { User, Story, Step, Review } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

// Testing Server- Haleigh
const resolvers = {
    Query: {
        profile: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw AuthenticationError;
        },

        // Currently working with this query to try to get the username for the author field without any errors.
        stories: async () => {
            const stories = await Story.find()
                .populate({
                    path: 'author',
                    populate: {
                        path: 'username',
                        model: 'User',
                    },
                });
            
            // return stories.map(story => {
            //     story.author = story.author.username;
            //     return story;
            // });

            console.log(stories);

            return stories;
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
        addStory: async (parent, { title, author, description, imageUrl, price, steps }, context) => {
            try {

                if (!context.user) {
                    throw AuthenticationError;
                }

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
    },
};

module.exports = resolvers;

const db = require('../config/connection');
const { User, Story, Chapter, Review } = require('../models');
const userSeeds = require('./userSeeds.json');
const cleanDB = require('./cleanDB');
const story1seeds = require('./story1seeds.js');
// const story2seeds = require('./story2seeds.js');
// const story3seeds = require('./story3seeds.js');
// const story4seeds = require('./story4seeds.js');
// const story5seeds = require('./story5seeds.js');
// const story6seeds = require('./story6seeds.js');
// const story7seeds = require('./story7seeds.js');
// const story8seeds = require('./story8seeds.js');

db.once('open', async () => {
    try {
        // await cleanDB('Counter_stepId', 'counters');
        await cleanDB('Review', 'reviews');
        await cleanDB('Step', 'steps');
        await cleanDB('Story', 'stories');
        await cleanDB('User', 'users');

        await User.create(userSeeds);

        await addStory(story1seeds.title, story1seeds.author, story1seeds.description, story1seeds.imageUrl, story1seeds.price, story1seeds.genre, story1seeds.tags, story1seeds.steps);

        // await addStory(story2seeds.title, story2seeds.author, story2seeds.description, story2seeds.imageUrl, story2seeds.price, story2seeds.genre, story2seeds.tags, story2seeds.steps);

        // await addStory(story3seeds.title, story3seeds.author, story3seeds.description, story3seeds.imageUrl, story3seeds.price, story3seeds.genre, story3seeds.tags, story3seeds.steps);

        // await addStory(story4seeds.title, story4seeds.author, story4seeds.description, story4seeds.imageUrl, story4seeds.price, story4seeds.genre, story4seeds.tags, story4seeds.steps);

        // await addStory(story5seeds.title, story5seeds.author, story5seeds.description, story5seeds.imageUrl, story5seeds.price, story5seeds.genre, story5seeds.tags, story5seeds.steps);

        // await addStory(story6seeds.title, story6seeds.author, story6seeds.description, story6seeds.imageUrl, story6seeds.price, story6seeds.genre, story6seeds.tags, story6seeds.steps);

        // This is the cyberpunk one which currently has a bunch of nextStepIds referring to steps that don't exist.
        // await addStory(story7seeds.title, story7seeds.author, story7seeds.description, story7seeds.imageUrl, story7seeds.price, story7seeds.genre, story7seeds.tags, story7seeds.steps);

        // This is the cyberpunk one which should not have nextStepIds referring to steps that don't exist, hopefully. But I was hitting wrong page errors after some steps, maybe bc those were end steps or something.
        // await addStory(story8seeds.title, story8seeds.author, story8seeds.description, story8seeds.imageUrl, story8seeds.price, story8seeds.genre, story8seeds.tags, story8seeds.steps);

        console.log('all done!');
        process.exit(0);

    } catch (err) {
        throw err;
    }
});

const addStory = async ( title, author, description, imageUrl, price, genre, tags, steps) => {
    const stepObjectIds = [];

    console.log(title);

    for (const step of steps) {
        const newStep = await Step.create(step);
        stepObjectIds.push(newStep._id);
    }

    const storySeed = await Story.create({
        title,
        author,
        description,
        imageUrl,
        price,
        genre, 
        tags,
        steps: stepObjectIds
    });

    const updatedUser = await User.findOneAndUpdate(
        { username: author },
        { $addToSet: { 'authorInfo.createdStories': storySeed._id } },
        { new: true }
    );
}
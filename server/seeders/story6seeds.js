const title = `Mystic Ruins: The Guardian's Riddle`;
const author = 'cyberScribe';
const description = `Venture into the Mystic Ruins, where an ancient guardian holds the key to unlocking a long-forgotten prophecy. Solve the guardian's riddle and unravel the mysteries of the past to shape the fate of the future.`;
const imageUrl = '/images/test-img-6.jpg';
const price = 0;
const genre = 'Urban Fantasy';
const tags = [
    'epic quest',
    'prophesy fulfilled'
]

const steps = [
    // Chapter 1

    // step1
    {
        stepId: 1,
        stepText: 'You find an ancient map leading to a lost treasure. Where do you start your journey?',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Head into the Dark Forest.',
                nextStepId: 2,
            },
            {
                choiceText: 'Sail across the Mystic Sea.',
                nextStepId: 3,
            },
            {
                choiceText: 'Climb the Treacherous Mountains.',
                nextStepId: 4,
            },
        ],
    },
    // Chapter 2
    // step2
    {
        stepId: 2,
        stepText: 'You are in a dark forest. What do you want to do next?',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Follow the trail marked with strange symbols.',
                nextStepId: 5,
            },
            {
                choiceText: 'Befriend a talking owl who offers guidance.',
                nextStepId: 6,
            },
            {
                choiceText: 'Set up camp and explore the area at night.',
                nextStepId: 7,
            },
        ],
    },
    // step3
    {
        stepId: 3,
        stepText: 'You sailed across the mystic sea. What do you want to do next?',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Seek help from a mysterious old sailor.',
                nextStepId: 8,
            },
            {
                choiceText: 'Dive underwater to look for clues.',
                nextStepId: 9,
            },
            {
                choiceText: 'Navigate using the stars.',
                nextStepId: 10,
            },
        ],
    },
    // step4
    {
        stepId: 4,
        stepText: 'You climbed the treacherous mountains. What do you want to do next?',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Find a hidden cave entrance.',
                nextStepId: 11,
            },
            {
                choiceText: 'Cross a rickety old bridge.',
                nextStepId: 12,
            },
            {
                choiceText: 'Climb to the highest peak for a better view.',
                nextStepId: 13,
            },
        ],
    },
    // Chapter 3
    // step5
    {
        stepId: 5,
        stepText: 'You followed the trail marked with strange symbols. What do you want to do next?',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Encounter a band of friendly forest creatures.',
                nextStepId: 14,
            },
            {
                choiceText: 'Discover a hidden grove with magical properties.',
                nextStepId: 15,
            },
            {
                choiceText: 'Find a treasure chest filled with ancient coins.',
                nextStepId: 16,
            },
        ],
    },
    // step6
    {
        stepId: 6,
        stepText: 'You befriended the talking owl. What do you want to do next?',
        type: 'continuing',
        choices: [
            {
                choiceText: 'The owl leads you to a hidden treasure chest.',
                nextStepId: 17,
            },
            {
                choiceText: 'The owl introduces you to a wise old tree spirit.',
                nextStepId: 18,
            },
            {
                choiceText: 'The owl helps you find a secret path to a beautiful clearing.',
                nextStepId: 19,
            },
        ],
    },
    // step7
    {
        stepId: 7,
        stepText: 'You set up camp and explored the area at night. What do you want to do next?',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Hear a melodious tune and follow it to a gathering of musicians.',
                nextStepId: 20,
            },
            {
                choiceText: 'Find an ancient relic buried in the ground.',
                nextStepId: 21,
            },
            {
                choiceText: 'Encounter a group of friendly nomads who share their stories.',
                nextStepId: 22,
            },
        ],
    },
    // step8
    {
        stepId: 8,
        stepText: 'You sought help from an old sailor. What do you want to do next?',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Sail to a deserted island with a pristine beach.',
                nextStepId: 23,
            },
            {
                choiceText: 'Discover a shipwreck full of treasure.',
                nextStepId: 24,
            },
            {
                choiceText: 'Experience a gentle, magical storm that reveals a rainbow.',
                nextStepId: 25,
            },
        ],
    },
    // step9
    {
        stepId: 9,
        stepText: 'You dove underwater to look for clues. What do you want to do next?',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Find a sunken city with clues.',
                nextStepId: 26,
            },
            {
                choiceText: 'Encounter a playful group of dolphins.',
                nextStepId: 27,
            },
            {
                choiceText: 'Discover an underwater cave filled with glowing crystals.',
                nextStepId: 28,
            },
        ],
    },
    // step10
    {
        stepId: 10,
        stepText: 'You navigated using the stars. What do you want to do next?',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Reach a mysterious floating island with lush gardens.',
                nextStepId: 29,
            },
            {
                choiceText: 'Encounter a friendly ghost ship with a helpful crew.',
                nextStepId: 30,
            },
            {
                choiceText: 'Find a hidden lagoon with sparkling waters.',
                nextStepId: 31,
            },
        ],
    },
    // step11
    {
        stepId: 11,
        stepText: 'You found a hidden cave entrance. What do you want to do next?',
        type: 'continuing',
        choices: [
            {
                choiceText: `Find ancient cave paintings depicting the treasure's history.`,
                nextStepId: 32,
            },
            {
                choiceText: 'Discover a cave filled with beautiful gemstones.',
                nextStepId: 33,
            },
            {
                choiceText: 'Get guided by glowing crystals to the next clue.',
                nextStepId: 34,
            },
        ],
    },
    // step12
    {
        stepId: 12,
        stepText: 'You crossed a rickety old bridge. What do you want to do next?',
        type: 'continuing',
        choices: [
            {
                choiceText: 'The bridge leads you to a serene meadow with wildflowers.',
                nextStepId: 35,
            },
            {
                choiceText: 'Cross safely and find a hidden village of artisans.',
                nextStepId: 36,
            },
            {
                choiceText: 'Meet a friendly troll who shares his knowledge of the mountains.',
                nextStepId: 37,
            },
        ],
    },
    // step13
    {
        stepId: 13,
        stepText: 'You climbed to the highest peak. What do you want to do next?',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Spot the treasure location in the distance.',
                nextStepId: 38,
            },
            {
                choiceText: 'Experience a breathtaking view of the landscape.',
                nextStepId: 39,
            },
            {
                choiceText: 'Discover an abandoned campsite with valuable supplies.',
                nextStepId: 40,
            },
        ],
    },
    // Chapter 4 - Final Outcome
    // step14
    {
        stepId: 14,
        stepText: 'You successfully find the treasure and become a legend.',
        type: 'ending',
    },
    // step15
    {
        stepId: 15,
        stepText: 'You uncover the treasure but face a moral dilemma.',
        type: 'ending',
    },
    // step16
    {
        stepId: 16,
        stepText: `You find the treasure, but it's enchanted, leading to magical adventures.`,
        type: 'ending',
    },
    // step17
    {
        stepId: 17,
        stepText: 'You return home with newfound wisdom and stories to tell.',
        type: 'ending',
    },
    // step18
    {
        stepId: 18,
        stepText: `You gain knowledge of the treasure's location and leave clues for future adventurers.`,
        type: 'ending',
    },
    // step19
    {
        stepId: 19,
        stepText: `You decide to protect the treasure's secret for future generations.`,
        type: 'ending',
    },
    // step20
    {
        stepId: 20,
        stepText: 'You make an unexpected ally who enriches your journey.',
        type: 'ending',
    },
    // step21
    {
        stepId: 21,
        stepText: 'You face a final challenge that brings great rewards.',
        type: 'ending',
    },
    // step22
    {
        stepId: 22,
        stepText: 'You discover something even more valuable than treasure.',
        type: 'ending',
    },
    // step23
    {
        stepId: 23,
        stepText: 'You uncover an ancient prophecy about your destiny.',
        type: 'ending',
    },
    // step24
    {
        stepId: 24,
        stepText: 'You find a portal to another world full of wonders.',
        type: 'ending',
    },
    // step25
    {
        stepId: 25,
        stepText: 'You are awarded a medal of honor by the local king.',
        type: 'ending',
    },
    // step26
    {
        stepId: 26,
        stepText: 'You discover a hidden talent within yourself.',
        type: 'ending',
    },
    // step27
    {
        stepId: 27,
        stepText: 'You unlock the secrets of an ancient civilization.',
        type: 'ending',
    },
    // step28
    {
        stepId: 28,
        stepText: 'You write a bestselling book about your adventure.',
        type: 'ending',
    },
    // step29
    {
        stepId: 29,
        stepText: 'You find a map leading to even greater adventures.',
        type: 'ending',
    },
    // step30
    {
        stepId: 30,
        stepText: `You are invited to join an exclusive explorers' guild.`,
        type: 'ending',
    },
    // step31
    {
        stepId: 31,
        stepText: 'You establish a museum to share your findings with the world.',
        type: 'ending',
    },
    // step32
    {
        stepId: 32,
        stepText: `You find the treasure and help a community with the treasure's resources.`,
        type: 'ending',
    },
    // step33
    {
        stepId: 33,
        stepText: 'You invent a new tool inspired by your journey.',
        type: 'ending',
    },
    // step34
    {
        stepId: 34,
        stepText: 'You become a mentor for future adventurers.',
        type: 'ending',
    },
    // step35
    {
        stepId: 35,
        stepText: 'You discover the power of true friendship and loyalty.',
        type: 'ending',
    },
    // step36
    {
        stepId: 36,
        stepText: 'You discover a rare and precious artifact.',
        type: 'ending',
    },
    // step37
    {
        stepId: 37,
        stepText: 'You become the guardian of a sacred site.',
        type: 'ending',
    },
    // step38
    {
        stepId: 38,
        stepText: 'You retrieve the treasure and are celebrated as a hero in a grand festival.',
        type: 'ending',
    },
    // step39
    {
        stepId: 39,
        stepText: 'You find a magical artifact that brings joy to many.',
        type: 'ending',
    },
    // step40
    {
        stepId: 40,
        stepText: 'You become an ambassador for peace and harmony between realms.',
        type: 'ending',
    },
]

module.exports = { title, author, description, imageUrl, price, genre, tags, steps }
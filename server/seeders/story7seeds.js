const title = `Cyber Requiem: The Relic's Rebellion`;
const author = 'mythicNarrator';
const description = 'In the sprawling, neon-lit labyrinth of Neo-Tokyo 2099, you are a bioenhanced cyborg caught in a deadly race to uncover an ancient cyber relic with the power to change the balance of power in the city. Navigate treacherous alliances, betrayals, and battles against oppressive corporate and governmental forces, each decision shaping the fate of the city and its inhabitants. Will you lead the rebellion towards a new era of freedom, or will the shadows of corruption consume all hope for the future?';
const imageUrl = '/images/test-img-5.jpg';
const price = 3;
const genre = 'Cyberpunk';
const tags = [
    'dystopian',
    'governmental corruption',
    'rebellion',
]

const steps = [
    // Chapter 1
    // step1
    {
        stepId: 1,
        stepText: 'You are a bioenhanced cyborg living in the sprawling neon jungle of Neo-Tokyo, 2099. One evening, while scanning the darknet, you intercept a cryptic message about a hidden cyber relic that could change the balance of power in the city. Do you want to pursue the lead and uncover more about this relic?',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Follow the lead to the industrial sector.',
                nextStepId: 2,
            },
            {
                choiceText: 'Contact a trusted hacker friend for more information.',
                nextStepId: 3,
            },
            {
                choiceText: 'Ignore the message and continue with your routine.',
                nextStepId: 4,
            },
        ],
    },
    // Chapter 2
    // step2
    {
        stepId: 2,
        stepText: 'You navigate through the dimly lit, rain-soaked streets to the industrial sector. The air is thick with pollution, and the hum of machinery echoes around you. You arrive at an abandoned warehouse, rumored to be the base of a notorious hacker group, the Neon Serpents. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Sneak inside to gather information.',
                nextStepId: 5,
            },
            {
                choiceText: 'Approach openly and try to negotiate.',
                nextStepId: 6,
            },
            {
                choiceText: 'Set up surveillance and observe from a distance.',
                nextStepId: 7,
            },
        ],
    },
    // step3
    {
        stepId: 3,
        stepText: 'You reach out to your old friend, Kira, a master hacker who owes you a few favors. Kira quickly pulls up information about the relic and the factions interested in it. She warns you of the dangers ahead but offers her help. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Accept Kira\'s help and plan your next move together.',
                nextStepId: 8,
            },
            {
                choiceText: 'Thank Kira and decide to go solo.',
                nextStepId: 9,
            },
            {
                choiceText: 'Ask Kira to find more detailed information about the relic.',
                nextStepId: 10,
            },
        ],
    },
    // step4
    {
        stepId: 4,
        stepText: 'You dismiss the message and continue your nightly patrol of the lower city. As you walk through the streets, you notice a spike in cybercrime activity and a rise in gang violence. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Investigate the source of the cybercrime spike.',
                nextStepId: 11,
            },
            {
                choiceText: 'Confront a local gang to assert your presence.',
                nextStepId: 12,
            },
            {
                choiceText: 'Continue your patrol and gather more intel.',
                nextStepId: 13,
            },
        ],
    },
    // Chapter 3
    // step5
    {
        stepId: 5,
        stepText: 'You slip into the warehouse, moving silently through the shadows. Inside, you find a group of hackers working on a powerful AI. They notice you and raise alarms. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Engage them in combat to secure the area.',
                nextStepId: 14,
            },
            {
                choiceText: 'Try to hack their system to gain control.',
                nextStepId: 15,
            },
            {
                choiceText: 'Attempt to negotiate your way out.',
                nextStepId: 16,
            },
        ],
    },
    // step6
    {
        stepId: 6,
        stepText: 'You walk in openly, hands raised in a gesture of peace. The hackers are wary but allow you to speak. You offer a deal: information for information. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Offer them a valuable piece of data you recently acquired.',
                nextStepId: 17,
            },
            {
                choiceText: 'Propose a joint venture to uncover the relic.',
                nextStepId: 18,
            },
            {
                choiceText: 'Double-cross them and take control.',
                nextStepId: 19,
            },
        ],
    },
    // step7
    {
        stepId: 7,
        stepText: 'You set up a hidden surveillance post and watch the warehouse. Over the next few hours, you gather crucial information about their operations and the relic. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Report your findings to the local authorities.',
                nextStepId: 20,
            },
            {
                choiceText: 'Plan a stealthy infiltration to retrieve the relic.',
                nextStepId: 21,
            },
            {
                choiceText: 'Sell the information to a rival hacker group.',
                nextStepId: 22,
            },
        ],
    },
    // step8
    {
        stepId: 8,
        stepText: 'With Kira\'s help, you devise a plan to infiltrate a secure data vault where more information about the relic is stored. The heist is risky, but Kira\'s skills give you an edge. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Go ahead with the heist, trusting Kira\'s plan.',
                nextStepId: 23,
            },
            {
                choiceText: 'Modify the plan to reduce your risk.',
                nextStepId: 24,
            },
            {
                choiceText: 'Back out and consider a safer approach.',
                nextStepId: 25,
            },
        ],
    },
    // step9
    {
        stepId: 9,
        stepText: 'You decide to handle the mission solo, relying on your own skills and instincts. You gather your gear and set out to find more clues about the relic. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Investigate a lead in the corporate district.',
                nextStepId: 26,
            },
            {
                choiceText: 'Search the undercity for hidden information.',
                nextStepId: 27,
            },
            {
                choiceText: 'Confront a known informant for answers.',
                nextStepId: 28,
            },
        ],
    },
    // step10
    {
        stepId: 10,
        stepText: 'Kira delves deeper into the data streams and uncovers the relic\'s history. It was created by a secret government project aimed at controlling minds. The implications are massive. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Join forces with Kira to expose the government.',
                nextStepId: 29,
            },
            {
                choiceText: 'Use the information to gain leverage over the government.',
                nextStepId: 30,
            },
            {
                choiceText: 'Attempt to destroy the relic and prevent its use.',
                nextStepId: 31,
            },
        ],
    },
    // step11
    {
        stepId: 11,
        stepText: 'You dive into the cybercrime underworld, tracing digital footprints and uncovering a network of rogue AIs. These AIs are being used to destabilize the city. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Confront the AI network head-on.',
                nextStepId: 32,
            },
            {
                choiceText: 'Infiltrate the network and sabotage it from within.',
                nextStepId: 33,
            },
            {
                choiceText: 'Seek allies to help neutralize the threat.',
                nextStepId: 34,
            },
        ],
    },
    // step12
    {
        stepId: 12,
        stepText: 'You confront a local gang, the Iron Rats, to assert your dominance. The gang leader challenges you to a fight. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Accept the challenge and fight.',
                nextStepId: 35,
            },
            {
                choiceText: 'Negotiate for information instead.',
                nextStepId: 36,
            },
            {
                choiceText: 'Intimidate them into submission.',
                nextStepId: 37,
            },
        ],
    },
    // step13
    {
        stepId: 13,
        stepText: 'As you continue your patrol, you notice a pattern in the cybercrime activities, leading you to suspect a larger conspiracy. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Investigate the conspiracy further.',
                nextStepId: 38,
            },
            {
                choiceText: 'Inform the authorities about your suspicions.',
                nextStepId: 39,
            },
            {
                choiceText: 'Use the information to blackmail the conspirators.',
                nextStepId: 40,
            },
        ],
    },
    // Chapter 4 - Major Decision Points
    // step14
    {
        stepId: 14,
        stepText: 'In a fierce battle, you defeat the hackers but suffer severe damage. You retrieve crucial data about the relic, revealing its location. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Continue your mission despite your injuries.',
                nextStepId: 41,
            },
            {
                choiceText: 'Seek medical help before proceeding.',
                nextStepId: 42,
            },
            {
                choiceText: 'Call for backup to secure the relic.',
                nextStepId: 43,
            },
        ],
    },
    // step15
    {
        stepId: 15,
        stepText: 'You hack into their system, gaining control over their operations. You learn that the relic is part of a larger plan to control the city\'s populace. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Expose the plan to the public.',
                nextStepId: 44,
            },
            {
                choiceText: 'Use the information to blackmail the masterminds.',
                nextStepId: 45,
            },
            {
                choiceText: 'Destroy the system to prevent further control.',
                nextStepId: 46,
            },
        ],
    },
    // step16
    {
        stepId: 16,
        stepText: 'You attempt to negotiate, but the hackers are not interested in talking. They attack, and you are forced to defend yourself. The situation escalates quickly. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Fight your way out.',
                nextStepId: 47,
            },
            {
                choiceText: 'Try to escape and regroup.',
                nextStepId: 48,
            },
            {
                choiceText: 'Signal for help from nearby allies.',
                nextStepId: 49,
            },
        ],
    },
    // step17
    {
        stepId: 17,
        stepText: 'You offer them the valuable data, and they agree to share information about the relic. You learn that it\'s hidden in a heavily guarded corporate vault. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Plan a heist to infiltrate the vault.',
                nextStepId: 50,
            },
            {
                choiceText: 'Gather a team of specialists for the job.',
                nextStepId: 51,
            },
            {
                choiceText: 'Try to find an insider to help you.',
                nextStepId: 52,
            },
        ],
    },
    // step18
    {
        stepId: 18,
        stepText: 'The hackers agree to a joint venture. Together, you plot to steal the relic from its current owners, a powerful corporate conglomerate. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Launch an immediate raid on the corporate HQ.',
                nextStepId: 53,
            },
            {
                choiceText: 'Create a diversion to weaken their defenses first.',
                nextStepId: 54,
            },
            {
                choiceText: 'Infiltrate undercover and disable security systems.',
                nextStepId: 55,
            },
        ],
    },
    // step19
    {
        stepId: 19,
        stepText: 'You double-cross the hackers, taking control of their operations and resources. With newfound power, you set your sights on the relic. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Consolidate your power and plan your next move.',
                nextStepId: 56,
            },
            {
                choiceText: 'Use the resources to locate and retrieve the relic immediately.',
                nextStepId: 57,
            },
            {
                choiceText: 'Eliminate any remaining threats from the hacker group.',
                nextStepId: 58,
            },
        ],
    },
    // step20
    {
        stepId: 20,
        stepText: 'You report your findings to the authorities, who launch a full-scale investigation. However, this draws unwanted attention to you. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Go into hiding until things cool down.',
                nextStepId: 59,
            },
            {
                choiceText: 'Continue your investigation independently.',
                nextStepId: 60,
            },
            {
                choiceText: 'Collaborate with the authorities as an informant.',
                nextStepId: 61,
            },
        ],
    },
    // step21
    {
        stepId: 21,
        stepText: 'You plan a stealthy infiltration of the warehouse. Using advanced tech and cybernetic enhancements, you manage to sneak inside and find the relic. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Retrieve the relic and escape quietly.',
                nextStepId: 62,
            },
            {
                choiceText: 'Plant a tracker on the relic to monitor its movements.',
                nextStepId: 63,
            },
            {
                choiceText: 'Contact your hacker friend Kira for extraction.',
                nextStepId: 64,
            },
        ],
    },
    // step22
    {
        stepId: 22,
        stepText: 'You sell the information to a rival hacker group, the Digital Phantoms. They pay you handsomely and plan to take on the Neon Serpents. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Join the Digital Phantoms to ensure their success.',
                nextStepId: 65,
            },
            {
                choiceText: 'Use the money to fund your own mission.',
                nextStepId: 66,
            },
            {
                choiceText: 'Double-cross the Phantoms and take the relic for yourself.',
                nextStepId: 67,
            },
        ],
    },
    // Chapter 4 - Final Outcomes
    // step23
    {
        stepId: 23,
        stepText: 'The heist is a success. You and Kira manage to steal crucial data about the relic, including its exact location. However, you are now wanted by multiple factions. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Go into hiding and plan your next move.',
                nextStepId: 68,
            },
            {
                choiceText: 'Contact potential allies for protection.',
                nextStepId: 69,
            },
            {
                choiceText: 'Use the data to blackmail the involved factions.',
                nextStepId: 70,
            },
        ],
    },
    // step24
    {
        stepId: 24,
        stepText: 'You modify the plan, reducing your risk but also delaying your mission. During this time, you learn more about the relic\'s power. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Proceed with the modified heist plan.',
                nextStepId: 71,
            },
            {
                choiceText: 'Seek more allies to ensure success.',
                nextStepId: 72,
            },
            {
                choiceText: 'Abandon the heist and look for an alternative solution.',
                nextStepId: 73,
            },
        ],
    },
    // step25
    {
        stepId: 25,
        stepText: 'You back out, deciding the heist is too risky. Instead, you focus on gathering more information and resources. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Investigate the relic\'s origins.',
                nextStepId: 74,
            },
            {
                choiceText: 'Look for a safer way to acquire the relic.',
                nextStepId: 75,
            },
            {
                choiceText: 'Use your resources to sabotage the factions seeking the relic.',
                nextStepId: 76,
            },
        ],
    },
    // step26
    {
        stepId: 26,
        stepText: 'In the corporate district, you uncover a conspiracy involving the top echelons of Neo-Tokyo. The relic is part of their plan to control the population. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Expose the conspiracy to the public.',
                nextStepId: 77,
            },
            {
                choiceText: 'Blackmail the corporate leaders for your own gain.',
                nextStepId: 78,
            },
            {
                choiceText: 'Attempt to steal the relic from their headquarters.',
                nextStepId: 79,
            },
        ],
    },
    // step27
    {
        stepId: 27,
        stepText: 'In the undercity, you find a network of resistance fighters. They know about the relic and its potential. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Join the resistance to take down the oppressors.',
                nextStepId: 80,
            },
            {
                choiceText: 'Use the resistance as pawns in your plan.',
                nextStepId: 81,
            },
            {
                choiceText: 'Betray the resistance and sell them out.',
                nextStepId: 82,
            },
        ],
    },
    // step28
    {
        stepId: 28,
        stepText: 'You confront a known informant, a shady figure named Jax, in a dimly lit alley. Jax is reluctant to talk but eventually spills some information about the relic\'s location and its potential to control minds. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Press Jax for more detailed information.',
                nextStepId: 83,
            },
            {
                choiceText: 'Bribe Jax to become your informant.',
                nextStepId: 84,
            },
            {
                choiceText: 'Silence Jax to keep the information secret.',
                nextStepId: 85,
            },
        ],
    },
    // Chapter 4 - Major Decision Points
    // step29
    {
        stepId: 29,
        stepText: 'You and Kira decide to expose the government\'s mind control project. Together, you hack into government databases and release the information to the public. The revelation causes mass unrest. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Join the uprising and lead the fight against the government.',
                nextStepId: 86,
            },
            {
                choiceText: 'Use the chaos to steal the relic amidst the confusion.',
                nextStepId: 87,
            },
            {
                choiceText: 'Escape the city and start a new life with Kira.',
                nextStepId: 88,
            },
        ],
    },
    // step30
    {
        stepId: 30,
        stepText: 'With the information about the relic, you decide to gain leverage over the government. You contact a high-ranking official and propose a deal. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Demand a significant sum of money in exchange for your silence.',
                nextStepId: 89,
            },
            {
                choiceText: 'Request a powerful position within the government.',
                nextStepId: 90,
            },
            {
                choiceText: 'Threaten to release the information if your demands are not met.',
                nextStepId: 91,
            },
        ],
    },
    // step31
    {
        stepId: 31,
        stepText: 'Determined to prevent the relic from being used, you and Kira plan to destroy it. You infiltrate the heavily guarded facility where it is kept. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Plant explosives and escape before they detonate.',
                nextStepId: 92,
            },
            {
                choiceText: 'Hack into the facility\'s security systems to disable defenses.',
                nextStepId: 93,
            },
            {
                choiceText: 'Confront the facility\'s guards and fight your way to the relic.',
                nextStepId: 94,
            },
        ],
    },
    // step32
    {
        stepId: 32,
        stepText: 'You confront the AI network head-on, battling rogue AIs in cyberspace. The conflict is intense, but you manage to disable key nodes. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Continue dismantling the AI network piece by piece.',
                nextStepId: 95,
            },
            {
                choiceText: 'Capture the AI core to reprogram it for your purposes.',
                nextStepId: 96,
            },
            {
                choiceText: 'Destroy the entire network to prevent further harm.',
                nextStepId: 97,
            },
        ],
    },
    // step33
    {
        stepId: 33,
        stepText: 'You infiltrate the rogue AI network and start sabotaging it from within. Your actions go unnoticed at first, but soon the AIs become aware. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Continue the sabotage despite the risk.',
                nextStepId: 98,
            },
            {
                choiceText: 'Retreat and plan a more coordinated attack.',
                nextStepId: 99,
            },
            {
                choiceText: 'Attempt to communicate with the AIs to find a peaceful solution.',
                nextStepId: 100,
            },
        ],
    },
    // step34
    {
        stepId: 34,
        stepText: 'You seek allies to help neutralize the AI threat. A group of rogue hackers agrees to assist you in exchange for a share of the spoils. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Agree to their terms and plan the attack together.',
                nextStepId: 101,
            },
            {
                choiceText: 'Double-cross them once the threat is neutralized.',
                nextStepId: 102,
            },
            {
                choiceText: 'Use their help to disable the AI and then eliminate them as a potential threat.',
                nextStepId: 103,
            },
        ],
    },
    // step35
    {
        stepId: 35,
        stepText: 'You accept the gang leader\'s challenge and engage in a brutal fight. After a fierce battle, you emerge victorious. The gang now respects your authority. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Recruit the gang to help you find the relic.',
                nextStepId: 104,
            },
            {
                choiceText: 'Use the gang\'s resources to strengthen your position.',
                nextStepId: 105,
            },
            {
                choiceText: 'Disband the gang to prevent future threats.',
                nextStepId: 106,
            },
        ],
    },
    // step36
    {
        stepId: 36,
        stepText: 'You negotiate with the gang leader, offering information in exchange for their cooperation. They agree to help you. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Form an alliance and plan your next move together.',
                nextStepId: 107,
            },
            {
                choiceText: 'Use their knowledge to locate the relic and then betray them.',
                nextStepId: 108,
            },
            {
                choiceText: 'Gain their trust and use them as pawns in your larger plan.',
                nextStepId: 109,
            },
        ],
    },
    // step37
    {
        stepId: 37,
        stepText: 'You intimidate the gang into submission. They reluctantly provide you with information about the relic\'s whereabouts. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Follow the lead immediately.',
                nextStepId: 110,
            },
            {
                choiceText: 'Gather more intel before making a move.',
                nextStepId: 111,
            },
            {
                choiceText: 'Threaten the gang to ensure their silence.',
                nextStepId: 112,
            },
        ],
    },
    // step38
    {
        stepId: 38,
        stepText: 'You delve deeper into the conspiracy, uncovering links between the city\'s elite and the relic. The evidence you gather is explosive. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Leak the information to the press.',
                nextStepId: 113,
            },
            {
                choiceText: 'Blackmail the involved parties for your own benefit.',
                nextStepId: 114,
            },
            {
                choiceText: 'Use the evidence to incite a public uprising.',
                nextStepId: 115,
            },
        ],
    },
    // step39
    {
        stepId: 39,
        stepText: 'You inform the authorities about your suspicions. They launch an investigation, but soon you find yourself being watched. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Go into hiding to avoid detection.',
                nextStepId: 116,
            },
            {
                choiceText: 'Continue your investigation in secret.',
                nextStepId: 117,
            },
            {
                choiceText: 'Turn the tables and investigate the authorities.',
                nextStepId: 118,
            },
        ],
    },
    // step40
    {
        stepId: 40,
        stepText: 'You decide to blackmail the conspirators. They reluctantly agree to your demands, providing you with money and resources. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Use the resources to hunt down the relic.',
                nextStepId: 119,
            },
            {
                choiceText: 'Strengthen your position and consolidate power.',
                nextStepId: 120,
            },
            {
                choiceText: 'Turn the resources against the conspirators.',
                nextStepId: 121,
            },
        ],
    },
    // Chapter 5 - Major Decision Points
    // step41
    {
        stepId: 41,
        stepText: 'Despite your injuries, you push forward, determined to retrieve the relic. Your resolve and cybernetic enhancements keep you going. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Sneak into the relic\'s location and take it by surprise.',
                nextStepId: 122,
            },
            {
                choiceText: 'Use brute force to overcome any obstacles.',
                nextStepId: 123,
            },
            {
                choiceText: 'Call for backup to ensure success.',
                nextStepId: 124,
            },
        ],
    },
    // step42
    {
        stepId: 42,
        stepText: 'You seek medical help to recover from your injuries. While healing, you gather more information about the relic. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Resume your mission with renewed strength.',
                nextStepId: 125,
            },
            {
                choiceText: 'Recruit allies to help you retrieve the relic.',
                nextStepId: 126,
            },
            {
                choiceText: 'Use your downtime to plan a more strategic approach.',
                nextStepId: 127,
            },
        ],
    },
    // step43
    {
        stepId: 43,
        stepText: 'You call for backup, enlisting the help of trusted allies. Together, you form a plan to secure the relic. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Launch a coordinated assault on the relic\'s location.',
                nextStepId: 128,
            },
            {
                choiceText: 'Divide into teams to cover more ground and increase your chances.',
                nextStepId: 129,
            },
            {
                choiceText: 'Use a diversion to draw attention away from the main objective.',
                nextStepId: 130,
            },
        ],
    },
    // Chapter 6 - Plot Twists
    // step44
    {
        stepId: 44,
        stepText: 'You expose the plan to the public, causing widespread panic and chaos. The government is forced to respond. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Join the resistance and lead the fight for freedom.',
                nextStepId: 131,
            },
            {
                choiceText: 'Use the chaos to infiltrate government facilities.',
                nextStepId: 132,
            },
            {
                choiceText: 'Escape the city to avoid the fallout.',
                nextStepId: 133,
            },
        ],
    },
    // step45
    {
        stepId: 45,
        stepText: 'You use the information to blackmail the masterminds behind the plan. They reluctantly comply with your demands. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Take control of their resources to further your goals.',
                nextStepId: 134,
            },
            {
                choiceText: 'Ensure they are kept in check to prevent future plans.',
                nextStepId: 135,
            },
            {
                choiceText: 'Turn them into allies to fight a greater threat.',
                nextStepId: 136,
            },
        ],
    },
    // step46
    {
        stepId: 46,
        stepText: 'You destroy the system, preventing further control but drawing the ire of powerful enemies. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Go into hiding to evade retaliation.',
                nextStepId: 137,
            },
            {
                choiceText: 'Form an alliance with other rebels to protect yourself.',
                nextStepId: 138,
            },
            {
                choiceText: 'Launch a preemptive strike against your enemies.',
                nextStepId: 139,
            },
        ],
    },
    // step47
    {
        stepId: 47,
        stepText: 'You fight your way out, managing to escape but suffering further injuries. You have crucial information about the relic. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Seek medical attention and regroup.',
                nextStepId: 140,
            },
            {
                choiceText: 'Share the information with trusted allies.',
                nextStepId: 141,
            },
            {
                choiceText: 'Plan a solo mission to retrieve the relic.',
                nextStepId: 142,
            },
        ],
    },
    // step48
    {
        stepId: 48,
        stepText: 'You manage to escape and regroup. The hackers are now aware of you and your intentions. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Change your approach and seek new allies.',
                nextStepId: 143,
            },
            {
                choiceText: 'Launch a surprise attack to catch them off guard.',
                nextStepId: 144,
            },
            {
                choiceText: 'Gather more intel before making another move.',
                nextStepId: 145,
            },
        ],
    },
    // step49
    {
        stepId: 49,
        stepText: 'You signal for help from nearby allies. Reinforcements arrive, and together you fend off the attackers. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Plan a counterattack against the hackers.',
                nextStepId: 146,
            },
            {
                choiceText: 'Retreat and regroup for a more strategic approach.',
                nextStepId: 147,
            },
            {
                choiceText: 'Use the opportunity to escape with valuable data.',
                nextStepId: 148,
            },
        ],
    },
    // step50
    {
        stepId: 50,
        stepText: 'You plan a heist to infiltrate the corporate vault. With careful preparation and a skilled team, you manage to breach the vault. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Retrieve the relic and make a quick escape.',
                nextStepId: 149,
            },
            {
                choiceText: 'Plant a tracker on the relic to monitor its movements.',
                nextStepId: 150,
            },
            {
                choiceText: 'Disable security systems to ensure a smooth exit.',
                nextStepId: 151,
            },
        ],
    },
    // step51
    {
        stepId: 51,
        stepText: 'You gather a team of specialists for the job. Each member brings unique skills, increasing your chances of success. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Launch the heist with your team.',
                nextStepId: 152,
            },
            {
                choiceText: 'Conduct a reconnaissance mission first.',
                nextStepId: 153,
            },
            {
                choiceText: 'Prepare for contingencies in case things go wrong.',
                nextStepId: 154,
            },
        ],
    },
    // step52
    {
        stepId: 52,
        stepText: 'You try to find an insider to help you. After some investigation, you manage to bribe a corporate employee. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Use the insider to gain access to the vault.',
                nextStepId: 155,
            },
            {
                choiceText: 'Have the insider gather more information first.',
                nextStepId: 156,
            },
            {
                choiceText: 'Plan a joint operation with the insider\'s help.',
                nextStepId: 157,
            },
        ],
    },
    // step53
    {
        stepId: 53,
        stepText: 'You launch an immediate raid on the corporate HQ. The attack is swift and brutal. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Capture key personnel for interrogation.',
                nextStepId: 158,
            },
            {
                choiceText: 'Focus on retrieving the relic and escaping.',
                nextStepId: 159,
            },
            {
                choiceText: 'Sabotage the HQ to prevent retaliation.',
                nextStepId: 160,
            },
        ],
    },
    // step54
    {
        stepId: 54,
        stepText: 'You create a diversion to weaken their defenses. The distraction works, allowing you to infiltrate the HQ. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Head straight to the relic\'s location.',
                nextStepId: 161,
            },
            {
                choiceText: 'Gather intel from their mainframe first.',
                nextStepId: 162,
            },
            {
                choiceText: 'Plant explosives to cover your escape.',
                nextStepId: 163,
            },
        ],
    },
    // step55
    {
        stepId: 55,
        stepText: 'You infiltrate undercover and disable security systems from within. The mission is going smoothly until you encounter unexpected resistance. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Engage the resistance and fight your way through.',
                nextStepId: 164,
            },
            {
                choiceText: 'Evade the resistance and proceed stealthily.',
                nextStepId: 165,
            },
            {
                choiceText: 'Call for backup to handle the situation.',
                nextStepId: 166,
            },
        ],
    },
    // Chapter 7 - Twists and Turns
    // step56
    {
        stepId: 56,
        stepText: 'You consolidate your power, planning your next move. With the resources and information you have, the possibilities are endless. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Focus on expanding your influence in the city.',
                nextStepId: 167,
            },
            {
                choiceText: 'Begin a campaign to take down the city\'s elite.',
                nextStepId: 168,
            },
            {
                choiceText: 'Look for allies to strengthen your position.',
                nextStepId: 169,
            },
        ],
    },
    // step57
    {
        stepId: 57,
        stepText: 'Using the resources at your disposal, you locate and retrieve the relic. However, powerful enemies are now aware of your actions. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Hide the relic and go underground.',
                nextStepId: 170,
            },
            {
                choiceText: 'Use the relic\'s power to defend yourself.',
                nextStepId: 171,
            },
            {
                choiceText: 'Attempt to negotiate with your enemies.',
                nextStepId: 172,
            },
        ],
    },
    // step58
    {
        stepId: 58,
        stepText: 'You eliminate any remaining threats from the hacker group, ensuring your control. Now, with no one to oppose you, you have free rein. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Use the relic to gain ultimate power.',
                nextStepId: 173,
            },
            {
                choiceText: 'Destroy the relic to prevent misuse.',
                nextStepId: 174,
            },
            {
                choiceText: 'Hide the relic and continue your operations.',
                nextStepId: 175,
            },
        ],
    },
    // Chapter 8 - Climax
    // step59
    {
        stepId: 59,
        stepText: 'You go into hiding, evading those who seek to find you. From the shadows, you continue to monitor the situation. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Plan a return when the heat dies down.',
                nextStepId: 176,
            },
            {
                choiceText: 'Look for new allies to support your cause.',
                nextStepId: 177,
            },
            {
                choiceText: 'Focus on gathering more intelligence.',
                nextStepId: 178,
            },
        ],
    },
    // step60
    {
        stepId: 60,
        stepText: 'You continue your investigation independently, uncovering more secrets about the relic and its capabilities. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Use the information to blackmail those in power.',
                nextStepId: 179,
            },
            {
                choiceText: 'Share the information with trusted allies.',
                nextStepId: 180,
            },
            {
                choiceText: 'Plan to expose the truth to the public.',
                nextStepId: 181,
            },
        ],
    },
    // step61
    {
        stepId: 61,
        stepText: 'Collaborating with the authorities, you work as an informant, helping to dismantle the conspiracy. However, trust is fragile. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Continue working with the authorities.',
                nextStepId: 182,
            },
            {
                choiceText: 'Use your position to gather more power.',
                nextStepId: 183,
            },
            {
                choiceText: 'Turn the tables and betray the authorities.',
                nextStepId: 184,
            },
        ],
    },
    // step62
    {
        stepId: 62,
        stepText: 'You retrieve the relic and escape quietly, avoiding detection. With the relic in your possession, you must decide your next steps. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Hide the relic and study its powers.',
                nextStepId: 185,
            },
            {
                choiceText: 'Use the relic to gain influence and power.',
                nextStepId: 186,
            },
            {
                choiceText: 'Seek out allies to help you protect the relic.',
                nextStepId: 187,
            },
        ],
    },
    // step63
    {
        stepId: 63,
        stepText: 'You plant a tracker on the relic, allowing you to monitor its movements. The data reveals a complex web of transactions. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Use the data to intercept the relic.',
                nextStepId: 188,
            },
            {
                choiceText: 'Sell the data to the highest bidder.',
                nextStepId: 189,
            },
            {
                choiceText: 'Share the data with a trusted hacker group.',
                nextStepId: 190,
            },
        ],
    },
    // step64
    {
        stepId: 64,
        stepText: 'You contact Kira for extraction. She arrives swiftly, and together you secure the relic. Now, with both of you in possession of the relic, do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Study the relic to understand its powers.',
                nextStepId: 191,
            },
            {
                choiceText: 'Use the relic to challenge the city\'s elite.',
                nextStepId: 192,
            },
            {
                choiceText: 'Hide the relic and plan your next move.',
                nextStepId: 193,
            },
        ],
    },
    // Chapter 9 - Climactic Choices
    // step65
    {
        stepId: 65,
        stepText: 'You join the Digital Phantoms, ensuring their success against the Neon Serpents. With your help, they gain control over the city\'s digital landscape. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Help them establish a new order.',
                nextStepId: 194,
            },
            {
                choiceText: 'Use their power to further your own goals.',
                nextStepId: 195,
            },
            {
                choiceText: 'Betray them to seize control for yourself.',
                nextStepId: 196,
            },
        ],
    },
    // step66
    {
        stepId: 66,
        stepText: 'You use the money to fund your own mission. With increased resources, you plan your next steps carefully. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Recruit allies to support your cause.',
                nextStepId: 197,
            },
            {
                choiceText: 'Focus on acquiring more information about the relic.',
                nextStepId: 198,
            },
            {
                choiceText: 'Launch a direct assault on the relic\'s current holders.',
                nextStepId: 199,
            },
        ],
    },
    // step67
    {
        stepId: 67,
        stepText: 'You double-cross the Phantoms, taking the relic for yourself. With the relic in your possession, you must now decide your next move. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Hide the relic and plan your strategy.',
                nextStepId: 200,
            },
            {
                choiceText: 'Use the relic\'s power to dominate the city.',
                nextStepId: 201,
            },
            {
                choiceText: 'Seek out allies to help protect the relic.',
                nextStepId: 202,
            },
        ],
    },
    // Chapter 10 - The Final Confrontation
    // step68
    {
        stepId: 68,
        stepText: 'You go into hiding, planning your next move. From the shadows, you continue to monitor the situation. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Plan a return when the heat dies down.',
                nextStepId: 203,
            },
            {
                choiceText: 'Look for new allies to support your cause.',
                nextStepId: 204,
            },
            {
                choiceText: 'Focus on gathering more intelligence.',
                nextStepId: 205,
            },
        ],
    },
    // step69
    {
        stepId: 69,
        stepText: 'You contact potential allies for protection. Together, you form a strategy to use the relic for the greater good. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Plan a public reveal of the relic\'s powers.',
                nextStepId: 206,
            },
            {
                choiceText: 'Use the relic to dismantle oppressive systems.',
                nextStepId: 207,
            },
            {
                choiceText: 'Hide the relic until the time is right.',
                nextStepId: 208,
            },
        ],
    },
    // step70
    {
        stepId: 70,
        stepText: 'You use the data to blackmail the involved factions. They reluctantly comply with your demands. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Take control of their resources to further your goals.',
                nextStepId: 209,
            },
            {
                choiceText: 'Ensure they are kept in check to prevent future plans.',
                nextStepId: 210,
            },
            {
                choiceText: 'Turn them into allies to fight a greater threat.',
                nextStepId: 211,
            },
        ],
    },
    // Chapter 11 - Outcomes
    // step71
    {
        stepId: 71,
        stepText: 'You proceed with the modified heist plan, successfully retrieving the relic. However, the delay has drawn attention to your activities. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Go into hiding to evade detection.',
                nextStepId: 212,
            },
            {
                choiceText: 'Use the relic\'s power to protect yourself.',
                nextStepId: 213,
            },
            {
                choiceText: 'Seek out allies to help defend the relic.',
                nextStepId: 214,
            },
        ],
    },
    // step72
    {
        stepId: 72,
        stepText: 'You seek more allies to ensure success. With their help, you plan a more robust strategy. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Launch the heist with your newfound allies.',
                nextStepId: 215,
            },
            {
                choiceText: 'Gather more information about the relic.',
                nextStepId: 216,
            },
            {
                choiceText: 'Prepare for contingencies in case things go wrong.',
                nextStepId: 217,
            },
        ],
    },
    // step73
    {
        stepId: 73,
        stepText: 'You abandon the heist and look for an alternative solution. While researching, you discover another lead on the relic. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Follow the new lead immediately.',
                nextStepId: 218,
            },
            {
                choiceText: 'Gather more information before proceeding.',
                nextStepId: 219,
            },
            {
                choiceText: 'Contact allies to help you with this new lead.',
                nextStepId: 220,
            },
        ],
    },
    // Chapter 12 - Conclusion Approaches
    // step74
    {
        stepId: 74,
        stepText: 'You investigate the relic\'s origins, uncovering its true purpose and the dangers it poses. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Expose the relic\'s origins to the public.',
                nextStepId: 221,
            },
            {
                choiceText: 'Use the knowledge to control the relic.',
                nextStepId: 222,
            },
            {
                choiceText: 'Destroy the relic to prevent its misuse.',
                nextStepId: 223,
            },
        ],
    },
    // step75
    {
        stepId: 75,
        stepText: 'You look for a safer way to acquire the relic, uncovering an opportunity to buy it from a black market dealer. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Arrange a meeting with the dealer.',
                nextStepId: 224,
            },
            {
                choiceText: 'Plan to steal the relic from the dealer.',
                nextStepId: 225,
            },
            {
                choiceText: 'Infiltrate the black market to gather more intel.',
                nextStepId: 226,
            },
        ],
    },
    // step76
    {
        stepId: 76,
        stepText: 'You use your resources to sabotage the factions seeking the relic. Your actions destabilize their operations, but also draw their ire. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Go into hiding to avoid retaliation.',
                nextStepId: 227,
            },
            {
                choiceText: 'Form alliances to protect yourself.',
                nextStepId: 228,
            },
            {
                choiceText: 'Launch a preemptive strike against your enemies.',
                nextStepId: 229,
            },
        ],
    },
    // Chapter 13 - Resolutions
    // step77
    {
        stepId: 77,
        stepText: 'You expose the conspiracy to the public. The revelation causes mass unrest and forces the government to respond. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Join the uprising and lead the fight against the government.',
                nextStepId: 230,
            },
            {
                choiceText: 'Use the chaos to infiltrate government facilities.',
                nextStepId: 231,
            },
            {
                choiceText: 'Escape the city to avoid the fallout.',
                nextStepId: 232,
            },
        ],
    },
    // step78
    {
        stepId: 78,
        stepText: 'You blackmail the corporate leaders for your own gain. They reluctantly comply with your demands. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Take control of their resources to further your goals.',
                nextStepId: 233,
            },
            {
                choiceText: 'Ensure they are kept in check to prevent future plans.',
                nextStepId: 234,
            },
            {
                choiceText: 'Turn them into allies to fight a greater threat.',
                nextStepId: 235,
            },
        ],
    },
    // step79
    {
        stepId: 79,
        stepText: 'You attempt to steal the relic from the corporate headquarters. The mission is risky, but you manage to breach their defenses. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Retrieve the relic and escape quietly.',
                nextStepId: 236,
            },
            {
                choiceText: 'Plant a tracker on the relic to monitor its movements.',
                nextStepId: 237,
            },
            {
                choiceText: 'Disable their security systems to ensure a smooth exit.',
                nextStepId: 238,
            },
        ],
    },
    // Chapter 14 - Final Showdown
    // step80
    {
        stepId: 80,
        stepText: 'You join the resistance to take down the oppressors. Together, you plan a coordinated strike against the city\'s elite. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Lead the charge and inspire others to join the cause.',
                nextStepId: 239,
            },
            {
                choiceText: 'Use guerrilla tactics to weaken the enemy.',
                nextStepId: 240,
            },
            {
                choiceText: 'Focus on protecting key resistance leaders.',
                nextStepId: 241,
            },
        ],
    },
    // step81
    {
        stepId: 81,
        stepText: 'You use the resistance as pawns in your plan, manipulating them to achieve your own goals. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Direct them to weaken your enemies.',
                nextStepId: 242,
            },
            {
                choiceText: 'Ensure they are kept in the dark about your true intentions.',
                nextStepId: 243,
            },
            {
                choiceText: 'Betray them at the crucial moment for maximum gain.',
                nextStepId: 244,
            },
        ],
    },
    // step82
    {
        stepId: 82,
        stepText: 'You betray the resistance and sell them out to the highest bidder. This act makes you powerful enemies, but also opens new doors. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Use the betrayal to solidify your power.',
                nextStepId: 245,
            },
            {
                choiceText: 'Hide and lay low to avoid retaliation.',
                nextStepId: 246,
            },
            {
                choiceText: 'Seek new allies to protect yourself from backlash.',
                nextStepId: 247,
            },
        ],
    },
    // Chapter 15 - Endings
    // step83
    {
        stepId: 83,
        stepText: 'Pressing Jax for more detailed information, you uncover a deeper conspiracy involving multiple powerful factions. The stakes are higher than you thought. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Expose the entire conspiracy.',
                nextStepId: 248,
            },
            {
                choiceText: 'Use the information to leverage power.',
                nextStepId: 249,
            },
            {
                choiceText: 'Attempt to destroy the factions from within.',
                nextStepId: 250,
            },
        ],
    },
    // step84
    {
        stepId: 84,
        stepText: 'Bribing Jax to become your informant, you gain a valuable asset in the underworld. Jax provides you with continuous updates and crucial intel. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Use Jax\'s information to plan your moves carefully.',
                nextStepId: 251,
            },
            {
                choiceText: 'Leak some of the information to cause chaos.',
                nextStepId: 252,
            },
            {
                choiceText: 'Use Jax\'s intel to dismantle your enemies.',
                nextStepId: 253,
            },
        ],
    },
    // step85
    {
        stepId: 85,
        stepText: 'Silencing Jax to keep the information secret, you ensure that no one else knows what you\'ve discovered. However, you now have blood on your hands. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Continue your mission with increased caution.',
                nextStepId: 254,
            },
            {
                choiceText: 'Seek allies to help you bear the burden.',
                nextStepId: 255,
            },
            {
                choiceText: 'Use the information to gain power discreetly.',
                nextStepId: 256,
            },
        ],
    },
    // step86
    {
        stepId: 86,
        stepText: 'Joining the uprising, you become a key figure in the fight against the oppressive government. The battle is fierce and fraught with danger. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Lead the charge with unwavering determination.',
                nextStepId: 257,
            },
            {
                choiceText: 'Strategize and plan covert operations.',
                nextStepId: 258,
            },
            {
                choiceText: 'Focus on protecting the civilians caught in the crossfire.',
                nextStepId: 259,
            },
        ],
    },
    // step87
    {
        stepId: 87,
        stepText: 'Using the chaos to steal the relic, you manage to escape with it. The government is now in disarray, and you hold the key to its future. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Use the relic to establish a new order.',
                nextStepId: 260,
            },
            {
                choiceText: 'Hide the relic and bide your time.',
                nextStepId: 261,
            },
            {
                choiceText: 'Sell the relic to the highest bidder.',
                nextStepId: 262,
            },
        ],
    },
    // step88
    {
        stepId: 88,
        stepText: 'Escaping the city with Kira, you start a new life far from the chaos. The world outside is different, but the shadows of your past linger. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Rebuild your life and find peace.',
                nextStepId: 263,
            },
            {
                choiceText: 'Use your skills to help others in need.',
                nextStepId: 264,
            },
            {
                choiceText: 'Continue fighting the oppressive systems from afar.',
                nextStepId: 265,
            },
        ],
    },
    // step89
    {
        stepId: 89,
        stepText: 'Demanding a significant sum of money, you secure your financial future. However, wealth brings its own challenges. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Use the money to gain power and influence.',
                nextStepId: 266,
            },
            {
                choiceText: 'Invest in causes that fight oppression.',
                nextStepId: 267,
            },
            {
                choiceText: 'Live a life of luxury and try to forget your past.',
                nextStepId: 268,
            },
        ],
    },
    // step90
    {
        stepId: 90,
        stepText: 'Requesting a powerful position within the government, you are granted authority and influence. With power comes responsibility and risk. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Use your position to implement reforms.',
                nextStepId: 269,
            },
            {
                choiceText: 'Leverage your power for personal gain.',
                nextStepId: 270,
            },
            {
                choiceText: 'Plot to overthrow the existing power structure.',
                nextStepId: 271,
            },
        ],
    },
    // step91
    {
        stepId: 91,
        stepText: 'Threatening to release the information, you gain leverage over the government. They comply with your demands, but you are now a marked person. Do you...',
        type: 'continuing',
        choices: [
            {
                choiceText: 'Go into hiding to avoid retaliation.',
                nextStepId: 272,
            },
            {
                choiceText: 'Continue to use the leverage to control them.',
                nextStepId: 273,
            },
            {
                choiceText: 'Find allies to help protect you from the government.',
                nextStepId: 274,
            },
        ],
    },
    // Chapter 15 - Endings
    // step92
    {
        stepId: 92,
        stepText: 'Planting explosives, you destroy the facility and the relic. The explosion is heard across the city, signaling the end of the government\'s control. You become a hero, but the city is now in chaos.',
        type: 'ending',
    },
    // step93
    {
        stepId: 93,
        stepText: 'Hacking into the security systems, you disable defenses and destroy the relic. The facility\'s collapse marks a new era. You are celebrated as a savior, but new challenges await.',
        type: 'ending',
    },
    // step94
    {
        stepId: 94,
        stepText: 'Confronting the guards, you fight your way to the relic. Destroying it with your bare hands, you end its threat. You are a legend, but the scars of battle remain.',
        type: 'ending',
    },
    // step95
    {
        stepId: 95,
        stepText: 'Continuing to dismantle the AI network, you become a digital ghost, a savior of cyberspace. The city\'s systems are free, but you are forever tied to the digital realm.',
        type: 'ending',
    },
    // step96
    {
        stepId: 96,
        stepText: 'Capturing the AI core, you reprogram it to serve humanity. The AI becomes a guardian, but your influence wanes. You watch over the city as its silent protector.',
        type: 'ending',
    },
    // step97
    {
        stepId: 97,
        stepText: 'Destroying the entire network, you end the AI threat. The city is free, but the power vacuum leads to new dangers. You become a myth, a hero whose deeds are whispered in the streets.',
        type: 'ending',
    },
    // step98
    {
        stepId: 98,
        stepText: 'Continuing your sabotage, you disrupt the AI\'s plans. The network collapses, but you are hunted by the remnants. You live as a fugitive, a ghost in the machine.',
        type: 'ending',
    },
    // step99
    {
        stepId: 99,
        stepText: 'Retreating and planning a coordinated attack, you strike at the heart of the AI network. The victory is hard-fought, but you are victorious. The city rebuilds, and you are a hero.',
        type: 'ending',
    },
    // step100
    {
        stepId: 100,
        stepText: 'Attempting to communicate with the AIs, you find a peaceful solution. The AIs become allies, and together you build a new order. The city thrives under your guidance.',
        type: 'ending',
    },
    // step101
    {
        stepId: 101,
        stepText: 'Agreeing to the terms, you and the rogue hackers neutralize the AI threat. The victory solidifies your alliance, and you become a powerful force in the city.',
        type: 'ending',
    },
    // step102
    {
        stepId: 102,
        stepText: 'Double-crossing the rogue hackers, you take control of the AI network. With power consolidated, you reshape the city in your image. You are feared and revered.',
        type: 'ending',
    },
    // step103
    {
        stepId: 103,
        stepText: 'Using their help and then eliminating them, you secure the AI network for yourself. You hold the city\'s future in your hands, but at the cost of your humanity.',
        type: 'ending',
    },
    // step104
    {
        stepId: 104,
        stepText: 'Recruiting the gang, you use their resources to find the relic. The gang becomes loyal to you, and together you challenge the city\'s power structures. You are a new leader.',
        type: 'ending',
    },
    // step105
    {
        stepId: 105,
        stepText: 'Using the gang\'s resources, you strengthen your position. The city\'s elite takes notice, and you become a formidable player in the power game. Your influence grows.',
        type: 'ending',
    },
    // step106
    {
        stepId: 106,
        stepText: 'Disbanding the gang, you prevent future threats. The power vacuum leads to chaos, but you emerge as a stabilizing force. The city looks to you for leadership.',
        type: 'ending',
    },
    // step107
    {
        stepId: 107,
        stepText: 'Forming an alliance, you and the gang plan your next move. Together, you uncover the relic and use it to reshape the city. Your partnership becomes legendary.',
        type: 'ending',
    },
    // step108
    {
        stepId: 108,
        stepText: 'Using their knowledge to locate the relic, you betray the gang. With the relic in hand, you consolidate power, but enemies still lurk in the shadows.',
        type: 'ending',
    },
    // step109
    {
        stepId: 109,
        stepText: 'Gaining their trust, you use the gang as pawns. The city falls into chaos, but you rise as a new leader, feared and respected. Your rule is absolute.',
        type: 'ending',
    },
    // step110
    {
        stepId: 110,
        stepText: 'Following the lead immediately, you find the relic. With it in your possession, you must decide its fate. The city\'s future rests in your hands.',
        type: 'ending',
    },
    // step111
    {
        stepId: 111,
        stepText: 'Gathering more intel, you plan a strategic approach. Your careful planning leads to the relic\'s acquisition. You are hailed as a genius and a hero.',
        type: 'ending',
    },
    // step112
    {
        stepId: 112,
        stepText: 'Threatening the gang to ensure their silence, you secure the relic. The city trembles at your power, but your enemies plot in the shadows.',
        type: 'ending',
    },
    // step113
    {
        stepId: 113,
        stepText: 'Leaking the information to the press, you cause a scandal that topples the city\'s elite. In the power vacuum, you rise as a new leader, but the road ahead is perilous.',
        type: 'ending',
    },
    // step114
    {
        stepId: 114,
        stepText: 'Blackmailing the involved parties, you gain immense wealth and power. The city is yours to shape, but the cost of your soul is great.',
        type: 'ending',
    },
    // step115
    {
        stepId: 115,
        stepText: 'Using the evidence to incite a public uprising, you lead the charge against oppression. The city is reborn in the fires of revolution, and you are its guiding light.',
        type: 'ending',
    },
    // step116
    {
        stepId: 116,
        stepText: 'Going into hiding to avoid detection, you become a ghost in the system. From the shadows, you continue to influence the city\'s future.',
        type: 'ending',
    },
    // step117
    {
        stepId: 117,
        stepText: 'Continuing your investigation in secret, you uncover more truths about the relic. Your findings reshape the city, and you are a silent hero.',
        type: 'ending',
    },
    // step118
    {
        stepId: 118,
        stepText: 'Turning the tables and investigating the authorities, you expose corruption at the highest levels. The city is in turmoil, but you are a beacon of hope.',
        type: 'ending',
    },
    // step119
    {
        stepId: 119,
        stepText: 'Using the resources to hunt down the relic, you find it and secure it. The city is now under your control, but new challenges arise.',
        type: 'ending',
    },
    // step120
    {
        stepId: 120,
        stepText: 'Strengthening your position, you become a key player in the city\'s power dynamics. Your influence grows, and you shape the future.',
        type: 'ending',
    },
    // step121
    {
        stepId: 121,
        stepText: 'Turning the resources against the conspirators, you dismantle their power structures. The city is free, but your enemies plot revenge.',
        type: 'ending',
    },
    // step122
    {
        stepId: 122,
        stepText: 'Sneaking into the relic\'s location, you take it by surprise. With the relic in your possession, you decide its fate. The city\'s future is in your hands.',
        type: 'ending',
    },
    // step123
    {
        stepId: 123,
        stepText: 'Using brute force, you overcome all obstacles and retrieve the relic. Your strength is unmatched, and the city bows to your power.',
        type: 'ending',
    },
    // step124
    {
        stepId: 124,
        stepText: 'Calling for backup, you ensure success in securing the relic. Together with your allies, you decide the city\'s future.',
        type: 'ending',
    },
    // step125
    {
        stepId: 125,
        stepText: 'Resuming your mission with renewed strength, you find the relic. Your determination pays off, and you shape the city\'s destiny.',
        type: 'ending',
    },
    // step126
    {
        stepId: 126,
        stepText: 'Recruiting allies, you retrieve the relic and plan its use. The city looks to you for leadership, and you rise as a new power.',
        type: 'ending',
    },
    // step127
    {
        stepId: 127,
        stepText: 'Using your downtime to plan strategically, you secure the relic with minimal risk. Your careful planning pays off, and you are a hero.',
        type: 'ending',
    },
    // step128
    {
        stepId: 128,
        stepText: 'Launching a coordinated assault, you retrieve the relic. Your victory is celebrated, but new challenges await.',
        type: 'ending',
    },
    // step129
    {
        stepId: 129,
        stepText: 'Dividing into teams, you secure the relic efficiently. Your leadership is recognized, and you shape the city\'s future.',
        type: 'ending',
    },
    // step130
    {
        stepId: 130,
        stepText: 'Using a diversion, you secure the relic with ease. The city hails you as a hero, but the road ahead is uncertain.',
        type: 'ending',
    },
    // step131
    {
        stepId: 131,
        stepText: 'Joining the resistance, you lead the fight for freedom. The city is reborn, and you are its savior.',
        type: 'ending',
    },
    // step132
    {
        stepId: 132,
        stepText: 'Using the chaos to infiltrate government facilities, you uncover more secrets. Your actions reshape the city, and you are a hero.',
        type: 'ending',
    },
    // step133
    {
        stepId: 133,
        stepText: 'Escaping the city to avoid the fallout, you start a new life. The world outside is different, but you find peace.',
        type: 'ending',
    },
    // step134
    {
        stepId: 134,
        stepText: 'Taking control of their resources, you reshape the city. Your power grows, but so do your enemies.',
        type: 'ending',
    },
    // step135
    {
        stepId: 135,
        stepText: 'Keeping them in check, you prevent future plans. The city stabilizes under your watch, and you are a hero.',
        type: 'ending',
    },
    // step136
    {
        stepId: 136,
        stepText: 'Turning them into allies, you fight a greater threat. The city is united under your leadership, and you are celebrated.',
        type: 'ending',
    },
    // step137
    {
        stepId: 137,
        stepText: 'Going into hiding, you evade retaliation. From the shadows, you influence the city\'s future.',
        type: 'ending',
    },
    // step138
    {
        stepId: 138,
        stepText: 'Forming an alliance, you protect yourself and your allies. The city rebuilds, and you are a hero.',
        type: 'ending',
    },
    // step139
    {
        stepId: 139,
        stepText: 'Launching a preemptive strike, you eliminate your enemies. The city is free, but new challenges await.',
        type: 'ending',
    },
    // step140
    {
        stepId: 140,
        stepText: 'Seeking medical attention, you recover and regroup. Your mission continues, and you secure the relic.',
        type: 'ending',
    },
    // step141
    {
        stepId: 141,
        stepText: 'Sharing the information with trusted allies, you plan a coordinated effort. Together, you secure the relic and reshape the city.',
        type: 'ending',
    },
    // step142
    {
        stepId: 142,
        stepText: 'Planning a solo mission, you retrieve the relic. Your determination pays off, and you are a hero. ',
        type: 'ending',
    },
    // step143
    {
        stepId: 143,
        stepText: 'Changing your approach, you seek new allies. Together, you secure the relic and plan its use. The city looks to you for leadership.',
        type: 'ending',
    },
    // step144
    {
        stepId: 144,
        stepText: 'Launching a surprise attack, you catch them off guard and secure the relic. Your victory is celebrated, but new challenges await.',
        type: 'ending',
    },
    // step145
    {
        stepId: 145,
        stepText: 'Gathering more intel, you plan a strategic approach. Your careful planning leads to the relic\'s acquisition. You are hailed as a genius and a hero.',
        type: 'ending',
    },
    // step146
    {
        stepId: 146,
        stepText: 'Planning a counterattack, you defeat the hackers and secure the relic. Your actions are celebrated, and you are a hero.',
        type: 'ending',
    },
    // step147
    {
        stepId: 147,
        stepText: 'Retreating and regrouping, you plan a more strategic approach. Your careful planning leads to the relic\'s acquisition. You are hailed as a hero.',
        type: 'ending',
    },
    // step148
    {
        stepId: 148,
        stepText: 'Using the opportunity to escape, you secure valuable data and the relic. Your victory is celebrated, but new challenges await.',
        type: 'ending',
    },
    // step149
    {
        stepId: 149,
        stepText: 'Retrieving the relic, you make a quick escape. With the relic in your possession, you must decide its fate. The city\'s future is in your hands.',
        type: 'ending',
    },
    // step150
    {
        stepId: 150,
        stepText: 'Planting a tracker, you monitor the relic\'s movements and uncover more secrets. Your actions reshape the city, and you are a hero.',
        type: 'ending',
    },
    // step151
    {
        stepId: 151,
        stepText: 'Disabling security systems, you ensure a smooth exit with the relic. The city celebrates your victory, but new challenges await.',
        type: 'ending',
    },
    // step152
    {
        stepId: 152,
        stepText: 'Launching the heist with your team, you retrieve the relic. Your leadership is recognized, and you shape the city\'s future.',
        type: 'ending',
    },
    // step153
    {
        stepId: 153,
        stepText: 'Conducting a reconnaissance mission, you gather crucial intel. Your careful planning leads to the relic\'s acquisition. You are hailed as a hero.',
        type: 'ending',
    },
    // step154
    {
        stepId: 154,
        stepText: 'Preparing for contingencies, you ensure a successful heist. Your foresight is celebrated, and you secure the relic.',
        type: 'ending',
    },
    // step155
    {
        stepId: 155,
        stepText: 'Using the insider\'s help, you gain access to the vault and retrieve the relic. Your actions are celebrated, and you shape the city\'s future.',
        type: 'ending',
    },
    // step156
    {
        stepId: 156,
        stepText: 'Having the insider gather more information, you plan a strategic approach. Your careful planning leads to the relic\'s acquisition. You are hailed as a hero.',
        type: 'ending',
    },
    // step157
    {
        stepId: 157,
        stepText: 'Planning a joint operation, you and the insider secure the relic. Your victory is celebrated, and you shape the city\'s future.',
        type: 'ending',
    },
    // step158
    {
        stepId: 158,
        stepText: 'Capturing key personnel, you gather crucial intel and secure the relic. Your actions are celebrated, and you shape the city\'s future.',
        type: 'ending',
    },
    // step159
    {
        stepId: 159,
        stepText: 'Focusing on retrieving the relic, you make a quick escape. With the relic in your possession, you must decide its fate. The city\'s future is in your hands.',
        type: 'ending',
    },
    // step160
    {
        stepId: 160,
        stepText: 'Sabotaging the HQ, you prevent retaliation and secure the relic. The city celebrates your victory, but new challenges await.',
        type: 'ending',
    },
    // step161
    {
        stepId: 161,
        stepText: 'Heading straight to the relic\'s location, you retrieve it. The city celebrates your victory, but new challenges await.',
        type: 'ending',
    },
    // step162
    {
        stepId: 162,
        stepText: 'Gathering intel from the mainframe, you uncover more secrets and secure the relic. Your actions reshape the city, and you are a hero.',
        type: 'ending',
    },
    // step163
    {
        stepId: 163,
        stepText: 'Planting explosives, you cover your escape and secure the relic. The city celebrates your victory, but new challenges await. ',
        type: 'ending',
    },
    // step164
    {
        stepId: 164,
        stepText: 'Engaging the resistance, you fight your way through and secure the relic. Your victory is celebrated, but new challenges await.',
        type: 'ending',
    },
    // step165
    {
        stepId: 165,
        stepText: 'Evading the resistance, you proceed stealthily and secure the relic. The city celebrates your victory, but new challenges await.',
        type: 'ending',
    },
    // step166
    {
        stepId: 166,
        stepText: 'Calling for backup, you handle the situation and secure the relic. Your victory is celebrated, but new challenges await.',
        type: 'ending',
    },
    // step167
    {
        stepId: 167,
        stepText: 'Focusing on expanding your influence, you become a key player in the city. Your actions reshape the future, and you are a hero.',
        type: 'ending',
    },
    // step168
    {
        stepId: 168,
        stepText: 'Beginning a campaign against the city\'s elite, you lead a revolution. The city is reborn, and you are its guiding light.',
        type: 'ending',
    },
    // step169
    {
        stepId: 169,
        stepText: 'Looking for allies, you strengthen your position and secure the relic. The city looks to you for leadership, and you are a hero.',
        type: 'ending',
    },
    // step170
    {
        stepId: 170,
        stepText: 'Hiding the relic, you go underground to evade detection. From the shadows, you influence the city\'s future.',
        type: 'ending',
    },
    // step171
    {
        stepId: 171,
        stepText: 'Using the relic\'s power, you defend yourself and secure the city. Your actions are celebrated.',
        type: 'ending',
    },
    // step172
    {
        stepId: 172,
        stepText: 'Attempting to negotiate with your enemies, you reach a tenuous peace. The city rebuilds under your watch, and you are a hero.',
        type: 'ending',
    },
    // step173
    {
        stepId: 173,
        stepText: 'Using the relic to gain ultimate power, you reshape the city in your image. Your rule is absolute, but your soul is burdened.',
        type: 'ending',
    },
    // step174
    {
        stepId: 174,
        stepText: 'Destroying the relic, you prevent its misuse and free the city.',
        type: 'ending',
    },
    // step175
    {
        stepId: 175,
        stepText: 'Hiding the relic, you continue your operations from the shadows. The city looks to you for guidance, and you are a hero.',
        type: 'ending',
    },
];

module.exports = { title, author, description, imageUrl, price, genre, tags, steps }
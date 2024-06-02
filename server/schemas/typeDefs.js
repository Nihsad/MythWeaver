const typeDefs = `

    type User {
        username: String!
        email: String!
        password: String!
        authorInfo: AuthorInfo!
        readerInfo: ReaderInfo!
        createdStoriesCount: Int
        playedStoriesCount: Int
    }

    type AuthorInfo {
        createdStories: [Story]!
    }

    type ReaderInfo {
        purchasedStories: [Story]!
        playedStories: [PlayedStories]!
    }
    
    type PlayedStories {
        storyId: ID!
        rating: Int!
    }

    type Story {
        _id: ID!
        title: String!
        # change back to author: User! when ready. Well, not quite that since it has to be a specific part of user. 
        author: String!
        description: String!
        imageUrl: String
        price: Int!
        publishedDate: String
        steps: [Step]!
        reviews: [Review]
    }

    type Step {
        _id: ID!
        stepId: Int!
        stepText: String!
        type: String!
        choices: [Choice]
    }

    input StepInput {
        stepText: String!
        type: String!
        choices: [ChoiceInput]
    }

    input ChoiceInput {
        choiceText: String!
        nextStepId: Int!
    }

    type Choice {
        _id: ID!
        choiceText: String!
        nextStepId: Int!
    }

    type Review {
        _id: ID!
        # change back to User! when ready
        username: String!
        rating: Int!
        reviewText: String
        createdAt: String
    }

    type Query {
        stories: [Story]
        story(_id: ID!): Story
    }

    type Mutation {
        addStory(title: String!, author: String!, description: String!, imageUrl: String, price: Int!, steps: [StepInput]!): Story
    }
`;

module.exports = typeDefs;
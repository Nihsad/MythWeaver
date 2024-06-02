const typeDefs = `

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        authorInfo: AuthorInfo
        readerInfo: ReaderInfo
        createdStoriesCount: Int
        savedStoriesCount: Int
    }

    type Auth {
        token: ID!
        user: User
    }

    type AuthorInfo {
        # used to be createdStories: [Story]!
        createdStories: [ID]
    }

    type ReaderInfo {
        # used to be purchasedStories: [Story]!
        purchasedStories: [ID]
        savedStories: [SavedStories]
        # used to be toBeReadStories: [Story]!
        toBeReadStories: [ID]
    }
    
    type SavedStories {
        storyId: ID
        rating: Int
    }

    type Story {
        _id: ID!
        title: String!
        # Currently working with this field and trying to find a way to successfully get author as a string when doing GET_STORIES query. May need to change to String! and adjust ADD_STORY mutation.
        author: ID!
        description: String!
        imageUrl: String
        price: Int!
        publishedDate: String
        steps: [Step]!
        reviews: [Review]
        averageRating: Int
        ratingsCount: Int
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
        # Current plan is to store the user's ID and populate into a username as needed
        username: ID!
        rating: Int!
        reviewText: String
        createdAt: String
    }

    type Query {
        profile: User
        stories: [Story]
        story(_id: ID!): Story
    }

    type Mutation {
        addUser(username: String!, email: String! password: String!): Auth
        login(email: String!, password: String!): Auth
        addStory(title: String!, author: ID!, description: String!, imageUrl: String, price: Int!, steps: [StepInput]!): Story
    }
`;

module.exports = typeDefs;
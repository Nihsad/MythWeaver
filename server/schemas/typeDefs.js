const typeDefs = `

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        authorInfo: AuthorInfo
        readerInfo: ReaderInfo
        createdStoriesCount: Int
        bookmarkedStoriesCount: Int
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
        bookmarkedStories: [bookmarkedStories]
        # used to be toBeReadStories: [Story]!
        toBeReadStories: [ID]
    }
    
    type bookmarkedStories {
        storyId: ID
        rating: Int
    }

    type Story {
        _id: ID!
        title: String!
        author: String!
        description: String!
        imageUrl: String
        price: Int!
        genre: String
        tags: [String]
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

    type Choice {
        _id: ID!
        choiceText: String!
        nextStepId: Int!
    }

    type Review {
        _id: ID!
        username: String!
        rating: Int!
        reviewText: String
        createdAt: String
        createdAtFormattedDate: String
    }

    input StoryInput {
        title: String!
        author: String!
        description: String!
        imageUrl: String
        price: Int!
        genre: String!
        tags: [String]!
        steps: [StepInput]!
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

    input ReviewInput {
        storyId: ID!
        username: String!
        rating: Int!
        reviewText: String        
    }

    type Query {
        profile: User
        stories: [Story]
        story(storyId: ID!): Story
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addStory(input: StoryInput!): Story
        addToTBR(storyId: ID!): User
        addToBookmarks(storyId: ID!): User
        addReview(input: ReviewInput!): Review
    }
`;

module.exports = typeDefs;
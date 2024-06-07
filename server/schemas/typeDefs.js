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
        purchasedStories: [ID]
        bookmarkedStories: [bookmarkedStories]
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
        chapters: [Chapter]!
        reviews: [Review]
        averageRating: Int
        ratingsCount: Int
    }

    type Chapter {
        _id: ID!
        chapterIndex: Int!
        title: String!
        content: String!
        isEnd: Boolean!
        choices: [Choice]
    }

    type Choice {
        _id: ID!
        choiceText: String!
        nextChapterIndex: Int!
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
        chapters: [ChapterInput]!
    }

    input ChapterInput {
        chapterIndex: Int!
        title: String!
        content: String!
        isEnd: Boolean!
        choices: [ChoiceInput]!
    }

    input ChoiceInput {
        choiceText: String!
        nextChapterIndex: Int!
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
        storiesTest: [Story]
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
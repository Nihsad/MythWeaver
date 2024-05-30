const typeDefs = `
    scalar Date

    type Auth {
        token: ID!
        user: User
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        authorInfo: AuthorInfo!
        readerInfo: ReaderInfo!
    }

    type AuthorInfo {
        casualReaderRate: Int
        stalwartSupporterRate: Int
        loyalDevoteeRate: Int
        # populate the createdStories
        createdStories: [Story]!
    }

    type ReaderInfo {
        # populate the purchasedStories
        purchasedStories: [Story]!
        subscriptions: [Subscription]!
        playedStories: [PlayedStory]!
        # populate the stories in the toReadList
        toReadList: [Story]!
    }

    type Subscription {
        authorId: ID!
        plan: String!
    }

    type PlayedStory {
        storyId: ID!
        rating: Int!
    }

    type Story {
        _id: ID!
        title: String!
        # populate the User from the ObjectId that the author field holds
        author: User!
        description: String!
        imageUrl: String
        storyStyle: String!
        genre: [String]!
        tags: [String]
        maturityLevel: Int!
        publishedDate: Date!
        lastUpdatedDate: Date!
        steps: [Step]!
        reviews: [Review]!
        paymentInfo: PaymentInfo
    }

    type Step {
        _id: ID!
        stepText: String!
        choices: [ID]!
    }

    type Choice {
        _id: ID!
        choiceText: String!
        nextStep: ID!
        votes: Int
    }

    type Review {
        _id: ID!
        userId: ID!
        rating: Int!
        reviewText: String
        createdAt: Date!
    }

    type PaymentInfo {
        paymentModel: String!
        oneTimePaymentPrice: Int
    }
`

module.exports = typeDefs;
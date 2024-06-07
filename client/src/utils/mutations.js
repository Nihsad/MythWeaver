import { gql } from '@apollo/client';

// Functionality for a user to be added to the db and associated with a token
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token 
            user {
                _id
                username
            }
        }
    }
`;

// Functionality for a user to log in and be associated with a token
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token 
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_STORY = gql`
    mutation addStory($storyInput: StoryInput!) {
        addStory(input: $storyInput) {
            _id 
            title
            author
            description
            imageUrl
            price
            genre
            tags
            publishedDate
            steps {
                _id
                stepId
                stepText
                type
                choices {
                    choiceText
                    nextStepId
                }
            }
        }
    }
`;

export const ADD_TO_TBR = gql`
    mutation addToTBR($storyId: ID!) {
        addToTBR(storyId: $storyId) {
            _id
            username
            authorInfo {
                createdStories
            }
            readerInfo {
                purchasedStories
                bookmarkedStories {
                    storyId
                    rating
                }
                toBeReadStories
            }
        }
    }
`;

export const ADD_TO_BOOKMARKS = gql`
    mutation addToBookmarks($storyId: ID!) {
        addToBookmarks(storyId: $storyId) {
            _id
            username
            authorInfo {
                createdStories
            }
            readerInfo {
                purchasedStories
                bookmarkedStories {
                    storyId
                    rating
                }
                toBeReadStories
            }
        }
    }
`;

export const ADD_REVIEW = gql`
    mutation addReview($reviewInput: ReviewInput!) {
        addReview(input: $reviewInput) {
            _id
            username
            rating
            reviewText
            createdAtFormattedDate
        }
    }
`;
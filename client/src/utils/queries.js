import { gql } from '@apollo/client';

export const GET_PROFILE = gql`
    query GET_PROFILE {
        profile {
            _id
            username
            email
            password
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

export const GET_STORIES = gql`
    # For the home page
    query GET_STORIES {
        stories {
            _id
            title
            author
            description
            imageUrl
            price
            genre
            tags
            publishedDate
            averageRating
            ratingsCount
        }
    }
`;

export const GET_STORY = gql`
    # This is currently all the info for 1 story
    query GET_STORY($storyId: ID!) {
        story(storyId: $storyId) {
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
                    _id
                    choiceText
                    nextStepId
                }
            }
            reviews {
                _id
                username
                rating
                reviewText
                createdAtFormattedDate
            }
        }
    }
`;


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
                savedStories {
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
            publishedDate
            averageRating
            ratingsCount
        }
    }
`;


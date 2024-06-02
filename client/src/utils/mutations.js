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
    mutation addStory($title: String!, $author: ID!, $description: String!, $imageUrl: String, $price: Int!, $steps: [StepInput]!) {
        addStory(title: $title, author: $author, description: $description, imageUrl: $imageUrl, price: $price, steps: $steps) {
            _id 
            title
            author
            description
            imageUrl
            price
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
            reviews {
                _id
                username
                rating
                reviewText
                createdAt
            }
        }
    }
`;
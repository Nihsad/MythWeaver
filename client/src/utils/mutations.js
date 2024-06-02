import { gql } from '@apollo/client';

export const ADD_STORY = gql`
    mutation addStory($title: String!, $author: String!, $description: String!, $imageUrl: String, $price: Int!, $steps: [StepInput]!) {
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
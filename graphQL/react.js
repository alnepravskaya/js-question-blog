import { gql } from '@apollo/client';

export const REACT_PAGE = gql`
    query reactCollectionQuery {
        reactCollection {
            items {
                sys {
                    id
                }

                question {
                    json
                }
                answer {
                    json
                }
            }
        }
    }
`;

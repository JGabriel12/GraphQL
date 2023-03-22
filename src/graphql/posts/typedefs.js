import { gql } from 'apollo-server';

export const postTypeDefs = gql`
  extend type Query {
    post: Post!
    posts: [Posts!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    # userId: String!
    indexRef: Int!
    createdAt: String!
  }
`;

/*
  "id": "860",
  "title": "Et voluptatem nulla omnis et iusto ullam.",

  "body": "Ad non pariatur. Aut molestias accusamus et inventore sunt voluptates non doloreillum. Perspiciatis et provident vel et fugiat dolores ut. Quos quibusdam impedit cupiditate at eaque quae.",

  "userId": "29",
  "indexRef": 10,
  "createdAt": "2018-08-10T23:41:51.714Z"
*/

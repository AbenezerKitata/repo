import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Project {
    id: String
    title: String
    createdAt:DateTime
    updatedAt:DateTime
    subtitle: String
    image: String
    published: Boolean
    author:[User]
    authorId: String
  }
  type User {
    id: String
    name: String
    emailVerified:DateTime
    email: String
    image: String
    projects:[Project]
  }
  type Query {
    projects: [Project]
  }
  scalar DateTime
`;



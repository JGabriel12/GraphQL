import { gql } from 'apollo-server';
import { userResolvers } from './users/resolvers';
import { userTypeDefs } from './users/typedefs';

const rootTypeDefs = gql`
  type Query {
    _root: Boolean!
  }
`;

const rootResolvers = {
  Query: {
    _root: () => true,
  },
};

export const typeDefs = [rootTypeDefs, userTypeDefs];
export const resolvers = [rootResolvers, userResolvers];

import { gql } from 'apollo-server';
import { postResolvers } from './posts/resolvers';
import { postTypeDefs } from './posts/typedefs';
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

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers];

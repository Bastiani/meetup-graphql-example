import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLList, GraphQLString } from 'graphql';

import Post from './Post';
import PostModel from '../model/Post';
import CommentType from './Comment';
import CommentModel from '../model/Comment';

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Query interface for our blog',
  fields: {
    post: {
      type: Post,
      description: 'Query to get a single post',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (_, { id }) => PostModel.findOne({ _id: id }),
    },
    posts: {
      type: new GraphQLList(Post),
      description: 'Query to get all posts',
      args: {},
      resolve: () => PostModel.find(),
    },
    comments: {
      type: new GraphQLList(CommentType),
      description: 'Query to get all comments for the post',
      args: {
        postId: {
          type: GraphQLString,
        },
      },
      resolve: (_, { postId }) => CommentModel.find({ postId }),
    },
  },
});

export default Query;

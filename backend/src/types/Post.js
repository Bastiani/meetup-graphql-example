import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLBoolean,
} from 'graphql';

import CommentType from './Comment';
import CommentModel from '../model/Comment';

const Post = new GraphQLObjectType({
  name: 'Post',
  description: 'Post type definition',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'ID of the post',
      resolve: post => post.id,
    },
    title: {
      type: GraphQLString,
      description: 'Title of the post',
      args: {
        upperCase: {
          type: GraphQLBoolean,
        },
      },
      resolve: (post, { upperCase }) => (upperCase ? post.title.toUpperCase() : post.title),
    },
    content: {
      type: GraphQLString,
      description: 'Content of the post',
      resolve: post => post.content,
    },
    comments: {
      type: new GraphQLList(CommentType),
      description: 'Comments of the post',
      resolve: async post => CommentModel.find({ postId: post.id }),
    },
  },
});

export default Post;

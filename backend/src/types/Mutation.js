import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';

import Post from './Post';
import CommentType from './Comment';
import PostModel from '../model/Post';
import CommentModel from '../model/Comment';

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Mutation interface for our blog',
  fields: {
    createPost: {
      type: Post,
      args: {
        title: {
          type: GraphQLString,
          description: 'Title of the post',
        },
        content: {
          type: GraphQLString,
          description: 'Content of the post',
        },
      },
      resolve: async (_, args) => PostModel({ title: args.title, content: args.content }).save(),
    },
    deletePost: {
      type: GraphQLString,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: async (_, args) => {
        try {
          await PostModel.findOne({ _id: args.id }).remove();
          await CommentModel.find({ postId: args.id }).remove();
          return 'Post removido com sucesso!';
        } catch (error) {
          return error;
        }
      },
    },
    createComment: {
      type: CommentType,
      args: {
        postId: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'postId of the comment',
        },
        content: {
          type: GraphQLString,
          description: 'Content of the comment',
        },
      },
      resolve: async (_, { postId, content }) => CommentModel({ postId, content }).save(),
    },
  },
});

export default Mutation;

import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';

import Post from './Post';
import PostModel from '../model/Post';

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
          const post = await PostModel.findOne({ _id: args.id });
          await post.remove();
          return 'Post removido com sucesso!';
        } catch (error) {
          return error;
        }
      },
    },
  },
});

export default Mutation;

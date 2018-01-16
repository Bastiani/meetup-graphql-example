import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';

const Comment = new GraphQLObjectType({
  name: 'Comment',
  description: 'Comment type definition',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'ID of the comment',
      resolve: comment => comment.id,
    },
    postId: {
      type: GraphQLString,
      description: 'postId of the comment',
      resolve: comment => comment.postId,
    },
    content: {
      type: GraphQLString,
      description: 'Content of the comment',
      resolve: comment => comment.content,
    },
  },
});

export default Comment;

import { commitMutation, graphql } from 'react-relay';

const mutation = graphql`
  mutation CreateCommentMutation($postId: ID!, $content: String!) {
    createComment(postId: $postId, content: $content) {
      id
      postId
      content
    }
  }
`;

function CreateCommentMutation(environment, postId, content) {
  const variables = {
    postId,
    content,
  };
  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        console.log(response.createComment.postId);
        resolve(response.createComment);
      },
      onError: err => console.error(err),
    });
  });
}

export default CreateCommentMutation;

import { commitMutation, graphql } from 'react-relay';

const mutation = graphql`
  mutation DeletePostMutation($id: ID!) {
    deletePost(id: $id)
  }
`;

function DeletePostMutation(environment, id) {
  const variables = {
    id,
  };
  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        resolve(response.deletePost);
      },
      onError: err => console.error(err),
    });
  });
}

export default DeletePostMutation;

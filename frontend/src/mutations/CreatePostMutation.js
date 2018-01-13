import { commitMutation, graphql } from 'react-relay';

const mutation = graphql`
  mutation CreatePostMutation($title: String!, $content: String!) {
    createPost(title: $title, content: $content) {
      id
      title
      content
    }
  }
`;

function CreatePostMutation(environment, title, content) {
  const variables = {
    title,
    content,
  };
  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        console.log(response.createPost.title);
        resolve(response.createPost);
      },
      onError: err => console.error(err),
    });
  });
}

export default CreatePostMutation;

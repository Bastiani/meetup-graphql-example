import React from 'react';
import { Button } from '@rafacdb/bah';

import Post from './Post';
import DeletePostMutation from '../mutations/DeletePostMutation';
import environment from '../Environment';

class PostInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: props.posts.map(post => post),
    };

    this.handleDelete = async (id) => {
      try {
        await DeletePostMutation(environment, id);
        this.setState({
          posts: this.state.posts.filter(post => post.id !== id),
        });
      } catch (error) {
        console.log(error);
      }
    };

    this.renderPost = (post, i) => (
      <div key={i}>
        <Post key={post.id} post={post}>
          <Button danger small inline onClick={() => this.handleDelete(post.id)}>
            Delete
          </Button>
        </Post>
      </div>
    );
  }

  render() {
    return <div>{this.state.posts.map(this.renderPost)}</div>;
  }
}

export default PostInfo;

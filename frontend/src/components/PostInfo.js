import React from 'react';

import Post from './Post';
import DeletePostMutation from '../mutations/DeletePostMutation';
import environment from '../Environment';

require('../styles.css');

class PostInfo extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = id => () => {
      (async () => {
        try {
          await DeletePostMutation(environment, id);
          this[`post-${id}`].style = {};
          this[`post-${id}`].className = 'hidden';
        } catch (error) {
          console.log(error);
        }
      })();
    };
  }

  render() {
    return (
      <div>
        {this.props.posts.map(post => (
          <div>
            <Post inputRef={node => (this[`post-${post.id}`] = node)} key={post.id} post={post}>
              <button onClick={this.handleDelete(post.id)}>Delete</button>
            </Post>
          </div>
        ))}
      </div>
    );
  }
}

export default PostInfo;

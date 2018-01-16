import React from 'react';
import Modal from 'react-modal';

import CreateComment from './CreateComment';

const styles = {
  postWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ccc',
    margin: 10,
    cursor: 'pointer',
    height: '40px',
  },
  closeButton: {
    position: 'absolute',
    right: 12,
    top: 10,
    border: 0,
    background: 'white',
    fontSize: 25,
    color: 'gray',
  },
};

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  render() {
    return (
      <div>
        {this.props.children}
        <div
          style={styles.postWrapper}
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
        >
          <h3>{this.props.post.title}</h3>
        </div>
        <Modal isOpen={this.state.isOpen} ariaHideApp={false}>
          <h3>{this.props.post.title}</h3>
          <div>{this.props.post.content}</div>
          <CreateComment postId={this.props.post.id} />
          <button onClick={() => this.setState({ isOpen: false })} style={styles.closeButton}>
            X
          </button>
        </Modal>
      </div>
    );
  }
}

export default Post;

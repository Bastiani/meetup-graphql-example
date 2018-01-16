import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, FormFields, Button, TextAreaStyled } from '@rafacdb/bah';

import CreateCommentMutation from '../mutations/CreateCommentMutation';
import environment from '../Environment';
import CommentList from './CommentList';

const styles = {
  createCommentWrapper: { margin: 30 },
  contentWrapper: {
    width: '100%',
    height: '300px',
    fontSize: '20px',
  },
};

class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: props.postId,
      refreshList: true,
      content: '',
    };

    this.handleComment = async () => {
      try {
        const { postId, content } = this.state;
        const createdPost = await CreateCommentMutation(environment, postId, content);
        this.setState({ postId: createdPost.postId, content: '', refreshList: true });
      } catch (error) {
        console.log(error);
      }
    };
  }

  render() {
    return (
      <div style={styles.createCommentWrapper}>
        <CommentList postId={this.state.postId} refreshList={this.state.refreshList} />
        <Form>
          <FormFields>
            <TextAreaStyled>
              <textarea
                style={styles.contentWrapper}
                value={this.state.content}
                placeholder="Comment Content"
                onChange={(e) => {
                  this.setState({
                    content: e.target.value,
                    refreshList: false,
                  });
                }}
              />
            </TextAreaStyled>
            {this.state.postId &&
              this.state.content && (
                <Button success inline onClick={this.handleComment}>
                  Comment
                </Button>
              )}
          </FormFields>
        </Form>
      </div>
    );
  }
}

export default withRouter(CreateComment);

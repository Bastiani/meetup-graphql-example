import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, FormFields, Button, TextAreaStyled, Input } from '@rafacdb/bah';

import CreatePostMutation from '../mutations/CreatePostMutation';
import environment from '../Environment';

const styles = {
  createPostWrapper: { margin: 30 },
  titleWrapper: {
    fontSize: '20px',
  },
  contentWrapper: {
    width: '100%',
    height: '300px',
    fontSize: '20px',
  },
};

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };

    this.handlePost = async () => {
      try {
        const { title, content } = this.state;
        await CreatePostMutation(environment, title, content);
        this.props.history.push('/');
      } catch (error) {
        console.log(error);
      }
    };
  }

  render() {
    return (
      <div style={styles.createPostWrapper}>
        <Form>
          <FormFields>
            <Input
              style={styles.titleWrapper}
              value={this.state.title}
              placeholder="Title"
              onChange={e =>
                this.setState({
                  title: e.target.value,
                })
              }
            />
            <TextAreaStyled>
              <textarea
                style={styles.contentWrapper}
                value={this.state.content}
                placeholder="Content"
                onChange={(e) => {
                  this.setState({
                    content: e.target.value,
                  });
                }}
              />
            </TextAreaStyled>
            <Button info inline onClick={() => this.props.history.push('/')}>
              Voltar
            </Button>
            {this.state.title &&
              this.state.content && (
                <Button success inline onClick={this.handlePost}>
                  Post
                </Button>
              )}
          </FormFields>
        </Form>
      </div>
    );
  }
}

export default withRouter(CreatePost);

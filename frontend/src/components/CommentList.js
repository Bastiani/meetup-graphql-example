import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';

import environment from '../Environment';

const styles = {
  listPageWrapper: { marginTop: 20 },
  commentsStyle: {
    border: '1px solid #ccc',
    margin: 5,
    padding: 5,
  },
};

const List = props =>
  props.comments.map(comment => (
    <div style={styles.commentsStyle} key={comment.id}>
      {comment.content}
    </div>
  ));

const CommentList = ({ postId, refreshList }) => (
  <div style={styles.listPageWrapper}>
    <QueryRenderer
      environment={environment}
      query={graphql`
        query CommentListQuery($postId: String!) {
          comments(postId: $postId) {
            id
            postId
            content
          }
        }
      `}
      variables={{
        postId,
        refreshList,
      }}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          console.log('=========== ', props);
          return <List comments={props.comments} />;
        }
        return <div>Loading</div>;
      }}
    />
  </div>
);

export default CommentList;

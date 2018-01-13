import React from 'react';
import { Link } from 'react-router-dom';
import { QueryRenderer, graphql } from 'react-relay';

import PostInfo from './PostInfo';
import environment from '../Environment';

const styles = {
  listPageWrapper: { marginTop: 20, textAlign: 'center' },
  postButtonWrapper: {
    padding: 10,
    background: 'white',
    border: '2px solid indianred',
    color: 'indianred',
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 10,
  },
};

const ListPage = props => (
  <div style={styles.listPageWrapper}>
    <Link style={styles.postButtonWrapper} to="/create-post">
      New Post
    </Link>
    <div style={{ marginTop: 20 }}>
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ListPageQuery {
            posts {
              id
              title
              content
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <PostInfo posts={props.posts} />;
          }
          return <div>Loading</div>;
        }}
      />
    </div>
  </div>
);

export default ListPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { QueryRenderer, graphql } from 'react-relay';
import { Button } from '@rafacdb/bah';

import PostList from './PostList';
import environment from '../Environment';

const styles = {
  listPageWrapper: { marginTop: 20, textAlign: 'center' },
};

const ListPage = () => (
  <div style={styles.listPageWrapper}>
    <Link to="/create-post">
      <Button primary inline>
        New Post
      </Button>
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
            return <PostList posts={props.posts} />;
          }
          return <div>Loading</div>;
        }}
      />
    </div>
  </div>
);

export default ListPage;

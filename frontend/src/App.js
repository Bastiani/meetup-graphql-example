import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';

import ListPage from './components/ListPage';
import environment from './Environment';

const AppAllPostQuery = graphql`
  query AppAllPostQuery {
    posts {
      id
      title
      content
    }
  }
`;

const App = () => (
  <QueryRenderer
    environment={environment}
    query={AppAllPostQuery}
    render={({ error, props }) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        return <ListPage viewer={props.posts} />;
      }
      return <div>Loading</div>;
    }}
  />
);

export default App;

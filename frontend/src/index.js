import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider, injectGlobal } from 'styled-components';
import theme from '@rafacdb/bah/src/theme';

import App from './App';
import CreatePost from './components/CreatePost';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      {injectGlobal`
          * {
            margin: 0;
            padding: 0;
          }
          html,
          body {
            width: 100%;
            height: 100%;
            font-family: ${theme.bahFontFamily};
            color: ${theme.bahDefaultTextColor};
            background-color: ${theme.bahDefaultBackgroundColor};
          }
        `}
      <ThemeProvider theme={theme}>
        <Switch>
          <App path="/" exact />
          <CreatePost path="/create-post" exact />
        </Switch>
      </ThemeProvider>
    </div>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();

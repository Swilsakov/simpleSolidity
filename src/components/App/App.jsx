import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Global, theme } from './theme';
import { AppBody, Content } from './styled';
import { useGetGreeting } from '../../services';

import { Header } from '../Header';
import { Greeting } from '../../pages/Greeting';
import { SetName } from '../../pages/SetName';

export const App = () => {
  useGetGreeting();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<AppBody />}>
          <Global />
          <AppBody>
            <Header />
            <Content>
              <Switch>
                <Route exact path="/setname" component={SetName} />
                <Route component={Greeting} />
              </Switch>
            </Content>
          </AppBody>
        </Suspense>
      </ThemeProvider>
    </Router>
  );
};

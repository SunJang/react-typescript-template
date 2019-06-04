import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'components/pages/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        {/* <Route path="/qna" component={QnA} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

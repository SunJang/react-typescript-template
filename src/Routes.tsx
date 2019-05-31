import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'components/pages/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      {/* <Route path="/qna" component={QnA} /> */}
    </Switch>
  );
};

export default Routes;

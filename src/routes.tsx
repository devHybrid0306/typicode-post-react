import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { paths } from './constants/paths';
import MainPage from './containers/main';
import DetailPage from './containers/detail';
import PostPage from './containers/post';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path={`${paths.main}:id`} component={DetailPage} />
      <Route exact path={paths.main} component={MainPage} />
      <Route exact path={`${paths.post}/:id`} component={PostPage} />
      <Redirect to={paths.main} />
    </Switch>
  );
};

export default AppRoutes;

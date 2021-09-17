import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import EntityList from './EntityList';

const Admin: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/:entity`} component={EntityList} />
      <Route path={`${path}`} component={AdminDashboard} />
    </Switch>
  );
};

export default Admin;

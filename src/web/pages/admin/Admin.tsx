import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import EntityList from './EntityList';
import ContentForm from '../../components/content/ContentForm';

const Admin: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/content/create`} component={ContentForm} />
      <Route path={`${path}/:entity`} component={EntityList} />
      <Route path={`${path}`} component={AdminDashboard} />
    </Switch>
  );
};

export default Admin;

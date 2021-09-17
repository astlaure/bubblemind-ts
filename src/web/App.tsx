import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import Admin from './pages/admin/Admin';
import Login from './pages/Login';
import AuthContextProvider from './components/AuthContextProvider';

const App: React.FC = () => (
  <AuthContextProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </AuthContextProvider>
);

export default App;

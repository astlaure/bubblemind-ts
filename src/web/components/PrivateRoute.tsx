/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

interface Props {
  component: React.FC<any>;
  [prop: string]: any;
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const { state } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (state.authenticated) {
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;

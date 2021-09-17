import React, { useEffect, useReducer, useState } from 'react';
import AuthContext, { AuthState, initialState } from '../contexts/AuthContext';
import useHttpClient from '../hooks/useHttpClient';
import { Action } from '../interfaces/context.interface';

const reducer = (state = initialState, action: Action): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        authenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

const AuthContextProvider: React.FC = (props) => {
  const { children } = props;

  const httpClient = useHttpClient();
  const [state, dispatch] = useReducer(reducer, initialState, undefined);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    httpClient.get('/api/auth/profile')
      .then((payload) => dispatch({ type: 'LOGIN', payload }))
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {loaded ? children : null}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

import React from 'react';
import { Context } from '../interfaces/context.interface';

export interface AuthState {
  authenticated: boolean;
  user?: any;
}

export const initialState: AuthState = {
  authenticated: false,
  user: undefined,
};

const AuthContext = React.createContext<Context<AuthState>>({ state: initialState, dispatch: () => {} });

export default AuthContext;

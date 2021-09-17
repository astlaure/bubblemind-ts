import React from 'react';

export interface Context<T> {
  state: T;
  dispatch: React.Dispatch<any>;
}

export interface Action {
  type: string;
  payload?: any;
}

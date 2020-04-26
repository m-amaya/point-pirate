import React from 'react';
import { UserStore } from './user.store';

/**
 * Store, created with initial state
 */
export class Store {
  user: UserStore;

  constructor() {
    this.user = new UserStore();
  }
}

/**
 * Context shortcut
 */
export const StoreCtx = React.createContext({} as Store);

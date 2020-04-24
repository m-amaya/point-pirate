import React from 'react';
import { ChatterStore } from './chatter.store';
import { UserStore } from './user.store';
import { ViewStore } from './view.store';

/**
 * Store, created with initial state
 */
export class Store {
  public chatter: ChatterStore;

  public user: UserStore;

  public view: ViewStore;

  public constructor() {
    this.view = new ViewStore();
    this.user = new UserStore();
    this.chatter = new ChatterStore(this.user);
  }
}

/**
 * Context shortcut
 */
export const StoreCtx = React.createContext({} as Store);

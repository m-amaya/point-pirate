import React from 'react';
import io from 'socket.io-client';
import { RoomsStore } from './rooms.store';
import { UserStore } from './user.store';

/**
 * Store, created with initial state
 */
export class Store {
  rooms: RoomsStore;
  user: UserStore;
  private socket = io();

  constructor() {
    this.rooms = new RoomsStore(this.socket);
    this.user = new UserStore(this.socket);
  }
}

/**
 * Context shortcut
 */
export const StoreCtx = React.createContext({} as Store);

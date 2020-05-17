import React from 'react';
import io from 'socket.io-client';
import { RoomsStore } from './rooms.store';
import { SessionStore } from './session.store';
import { UserStore } from './user.store';

/**
 * Store, created with initial state
 */
export class Store {
  private socket = io();
  session: SessionStore;
  rooms: RoomsStore;
  user: UserStore;

  constructor() {
    this.session = new SessionStore(this.socket);
    this.rooms = new RoomsStore(this.socket);
    this.user = new UserStore(this.socket);
  }
}

/**
 * Context shortcut
 */
export const StoreCtx = React.createContext({} as Store);

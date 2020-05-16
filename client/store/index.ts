import React from 'react';
import io from 'socket.io-client';
import { RoomsStore } from './rooms.store';
import { RoomDetailStore } from './room-detail.store';
import { UserStore } from './user.store';

/**
 * Store, created with initial state
 */
export class Store {
  private socket = io();
  roomDetail: RoomDetailStore;
  rooms: RoomsStore;
  user: UserStore;

  constructor() {
    this.roomDetail = new RoomDetailStore(this.socket);
    this.rooms = new RoomsStore(this.socket);
    this.user = new UserStore(this.socket);
  }
}

/**
 * Context shortcut
 */
export const StoreCtx = React.createContext({} as Store);

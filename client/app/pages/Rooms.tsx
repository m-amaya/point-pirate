import React from 'react';
import { Header } from 'app/molecules/Header';
import { RoomListItem } from 'app/molecules/RoomListItem';

interface Room {
  id: string;
  name: string;
  isActive: boolean;
}

const rooms: Room[] = [
  {
    id: '0',
    name: 'WinTogether',
    isActive: true,
  },
  {
    id: '1',
    name: 'Sweepstakes',
    isActive: true,
  },
  {
    id: '2',
    name: 'Next App',
    isActive: false,
  },
];

export const Rooms: React.FC = () => {
  return (
    <div>
      <Header title="Rooms" actionButton={{ kind: 'primary', text: 'ADD' }} />
      {rooms.map((room) => (
        <RoomListItem key={room.id} {...room} />
      ))}
    </div>
  );
};

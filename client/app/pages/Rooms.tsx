import React, { useContext, useEffect, useState } from 'react';
import { AddRoomPopoverContent } from 'app/molecules/AddRoomPopoverContent';
import { Header } from 'app/molecules/Header';
import { RoomListItem } from 'app/molecules/RoomListItem';
import { StoreCtx } from 'store';
import { Room } from 'store/rooms.store';

export const Rooms: React.FC = () => {
  const { rooms } = useContext(StoreCtx);
  const [roomList, setRoomList] = useState<Room[]>([]);

  useEffect(() => {
    const sub = rooms.list$.subscribe((list) => setRoomList(list));
    return () => sub.unsubscribe();
  }, []);

  return (
    <div>
      <Header
        title="Rooms"
        actionButton={{
          kind: 'primary',
          text: 'ADD',
          popover: {
            content: <AddRoomPopoverContent />,
            preferredPosition: 'right',
          },
        }}
      />
      {roomList.map((room) => (
        <RoomListItem key={room.id} {...room} />
      ))}
    </div>
  );
};

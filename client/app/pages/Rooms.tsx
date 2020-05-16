import { useObservableState } from 'observable-hooks';
import React, { useContext, useLayoutEffect } from 'react';
import { AddRoomPopoverContent } from 'app/molecules/AddRoomPopoverContent';
import { Header } from 'app/molecules/Header';
import { RoomListItem } from 'app/molecules/RoomListItem';
import { StoreCtx } from 'store';

export const Rooms: React.FC = () => {
  const { rooms, roomDetail } = useContext(StoreCtx);
  const roomList = useObservableState(rooms.listSubject, []);

  useLayoutEffect(() => {
    roomDetail.leaveRoom();
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

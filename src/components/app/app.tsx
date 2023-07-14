import { useState } from 'react';
import { initialFriends } from '../../const';
import FriendList from '../friend-list/friend-list';
import AddFriend from '../add-friend/add-friend';
import SplitBill from '../split-bill/split-bill';
import { FriendType } from '../../types/types';

function App(): JSX.Element {
  const [friends, setFriends] = useState(initialFriends);

  function onAddFriends(friend: FriendType) {
    setFriends([...friends, friend]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        <AddFriend addFriend={onAddFriends} />
      </div>
      <SplitBill />
    </div>
  );
}

export default App;

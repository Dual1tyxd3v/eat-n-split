import { useState } from 'react';
import { initialFriends } from '../../const';
import FriendList from '../friend-list/friend-list';
import AddFriend from '../add-friend/add-friend';
import SplitBill from '../split-bill/split-bill';
import { FriendType } from '../../types/types';

function App(): JSX.Element {
  const [friends, setFriends] = useState(initialFriends);
  const [activeFriend, setActiveFriend] = useState<null | FriendType>(null);

  function onAddFriends(friend: FriendType) {
    setFriends([...friends, friend]);
  }

  function onToggleActiveFriend(friend: FriendType) {
    if (friend.id === activeFriend?.id) {
      setActiveFriend(null);
      return;
    }
    setActiveFriend(friend);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} toggleActiveFriend={onToggleActiveFriend}/>
        <AddFriend addFriend={onAddFriends} />
      </div>
      <SplitBill activeFriend={activeFriend} />
    </div>
  );
}

export default App;

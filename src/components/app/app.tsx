import { useState } from 'react';
import { initialFriends } from '../../const';
import FriendList from '../friend-list/friend-list';
import AddFriend from '../add-friend/add-friend';
import SplitBill from '../split-bill/split-bill';
import { FriendType } from '../../types/types';

function App(): JSX.Element {
  const [friends, setFriends] = useState(initialFriends);
  const [activeFriend, setActiveFriend] = useState<null | FriendType>(null);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function onAddFriends(friend: FriendType) {
    setFriends([...friends, friend]);
    setShowAddFriend(!showAddFriend);
  }

  function onToggleActiveFriend(friend: FriendType) {
    setActiveFriend((f) => (f?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function onEditFriendBalance(friend: FriendType) {
    setFriends(friends.map((fr) => (friend.id === fr.id ? friend : fr)));
  }

  function onClickHandler() {
    setShowAddFriend(!showAddFriend);
    setActiveFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          toggleActiveFriend={onToggleActiveFriend}
          activeId={activeFriend?.id}
        />
        <AddFriend addFriend={onAddFriends} isOpen={showAddFriend} />
        <button
          className="button"
          onClick={onClickHandler}
        >
          {showAddFriend ? 'Close' : 'Add friend'}
        </button>
      </div>
      <SplitBill
        activeFriend={activeFriend}
        onEditFriendBalance={onEditFriendBalance}
      />
    </div>
  );
}

export default App;

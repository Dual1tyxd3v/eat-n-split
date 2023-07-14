import { useState } from 'react';
import { initialFriends } from '../../const';
import FriendList from '../friend-list/friend-list';
import AddFriend from '../add-friend/add-friend';
import SplitBill from '../split-bill/split-bill';

function App(): JSX.Element {
  const [friends] = useState(initialFriends);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        <AddFriend />
      </div>
      <SplitBill />
    </div>
  );
}

export default App;

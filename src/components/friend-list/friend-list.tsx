import { FriendType, FriendsType } from '../../types/types';
import FriendItem from '../friend-item/friend-item';

type FriendListProps = {
  toggleActiveFriend: (friend: FriendType) => void;
  friends: FriendsType;
}

export default function FriendList({ friends, toggleActiveFriend }: FriendListProps) {
  return (
    <ul>
      {
        friends.map((friend) => <FriendItem key={friend.id} friend={friend} toggleActiveFriend={toggleActiveFriend} />)
      }
    </ul>
  );
}

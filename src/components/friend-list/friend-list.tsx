import { FriendType, FriendsType } from '../../types/types';
import FriendItem from '../friend-item/friend-item';

type FriendListProps = {
  toggleActiveFriend: (friend: FriendType) => void;
  friends: FriendsType;
  activeId: number | undefined;
}

export default function FriendList({ friends, toggleActiveFriend, activeId }: FriendListProps) {
  return (
    <ul>
      {
        friends.map((friend) => <FriendItem key={friend.id} friend={friend} toggleActiveFriend={toggleActiveFriend} activeId={activeId} />)
      }
    </ul>
  );
}

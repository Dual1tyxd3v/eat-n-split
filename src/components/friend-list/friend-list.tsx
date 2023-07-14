import { FriendsType } from '../../types/types';
import FriendItem from '../friend-item/friend-item';

export default function FriendList({ friends }: {friends: FriendsType}) {
  return (
    <ul>
      {
        friends.map((friend) => <FriendItem key={friend.id} friend={friend} />)
      }
    </ul>
  );
}

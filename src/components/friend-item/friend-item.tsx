import { FriendType } from '../../types/types';

type FriendItemProps = {
  toggleActiveFriend: (friend: FriendType) => void;
  friend: FriendType;
}

export default function FriendItem({ friend, toggleActiveFriend }: FriendItemProps) {
  const { name, image, balance } = friend;
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance < 0 && <p className="red"> You owe {name} {Math.abs(balance)}$</p>}
      {balance > 0 && <p className="green">{name} owes you {balance}$</p>}
      {balance === 0 && <p>You and {name} are even</p>}
      <button className="button" onClick={() => toggleActiveFriend(friend)} >Select</button>
    </li>
  );
}

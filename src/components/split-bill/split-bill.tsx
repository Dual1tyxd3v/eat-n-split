import { FriendType } from '../../types/types';

type SplitBillProps = {
  activeFriend: null | FriendType;
};

export default function SplitBill({ activeFriend }: SplitBillProps) {
  if (!activeFriend) {
    return null;
  }
  const {name} = activeFriend;
  return (
    <form action="" className="form-split-bill">
      <h2>Split a bill with a {name}</h2>
      <label>💰 Bill value</label>
      <input type="text" />
      <label>🕴 Your expense</label>
      <input type="text" />
      <label>👫 {name} expense</label>
      <input type="text" disabled />
      <label htmlFor="">🤑 Who is paying the bill</label>
      <select name="" id="">
        <option value="user">You</option>
        <option value="friend">{name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}

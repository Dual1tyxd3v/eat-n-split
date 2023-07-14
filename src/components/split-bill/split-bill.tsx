import { ChangeEvent, useState, FormEvent } from 'react';
import { FriendType } from '../../types/types';

type SplitBillProps = {
  activeFriend: null | FriendType;
  onEditFriendBalance: (friend: FriendType) => void;
};

export default function SplitBill({
  activeFriend,
  onEditFriendBalance,
}: SplitBillProps) {
  const [bill, setBill] = useState<undefined | number>();
  const [expanse, setExpanse] = useState<undefined | number>();
  const [whoPay, setWhoPay] = useState('user');

  if (!activeFriend) {
    return null;
  }

  function onChangeHandler(e: ChangeEvent) {
    const input = e.target as HTMLInputElement;
    input.name === 'bill' && +input.value >= 0 && setBill(+input.value);
    input.name === 'expanse' && +input.value >= 0 && setExpanse(+input.value);
    input.name === 'select' && setWhoPay(input.value);
  }

  function onSubmitHandler(e: FormEvent) {
    e.preventDefault();

    if (!bill || !expanse) {
      return;
    }
    activeFriend &&
      onEditFriendBalance({
        ...activeFriend,
        balance: whoPay === 'user' ? bill - expanse : -expanse,
      });
    setBill(0);
    setExpanse(0);
    setWhoPay('user');
  }

  const { name } = activeFriend;
  return (
    <form action="" className="form-split-bill" onSubmit={onSubmitHandler}>
      <h2>Split a bill with a {name}</h2>
      <label>💰 Bill value</label>
      <input
        type="number"
        name="bill"
        value={bill}
        onChange={onChangeHandler}
      />
      <label>🕴 Your expense</label>
      <input
        type="number"
        name="expanse"
        value={expanse}
        onChange={onChangeHandler}
      />
      <label>👫 {name} expense</label>
      <input
        type="number"
        disabled
        value={bill && expanse ? bill - expanse : 0}
      />
      <label htmlFor="select">🤑 Who is paying the bill</label>
      <select
        name="select"
        id="select"
        value={whoPay}
        onChange={onChangeHandler}
      >
        <option value="user">You</option>
        <option value="friend">{name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}

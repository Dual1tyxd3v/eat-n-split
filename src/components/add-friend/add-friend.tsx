import { ChangeEvent, FormEvent, useState } from 'react';
import { FriendType } from '../../types/types';

type AddFriendProps = {
  addFriend: (friend: FriendType) => void;
  isOpen: boolean;
};

export default function AddFriend({ addFriend, isOpen }: AddFriendProps) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
  });

  if (!isOpen) {
    return null;
  }

  function onChangeHandler(e: ChangeEvent) {
    const input = e.target as HTMLInputElement;
    input.name === 'name' && setFormData({ ...formData, name: input.value });
    input.name === 'image' && setFormData({ ...formData, image: input.value });
  }

  function onSubmitHandler(e: FormEvent) {
    e.preventDefault();

    if (!formData.name || !formData.image) {
      return;
    }

    addFriend({ ...formData, id: new Date().getTime(), balance: 0 });

    setFormData({ name: '', image: '' });
  }

  return (
    <form className="form-add-friend" onSubmit={onSubmitHandler}>
      <label htmlFor="name">👫 Friend</label>
      <input
        name="name"
        id="name"
        type="text"
        value={formData.name}
        onChange={onChangeHandler}
      />
      <label htmlFor="img">🖼 Image URL</label>
      <input
        name="image"
        id="img"
        type="text"
        value={formData.image}
        onChange={onChangeHandler}
      />
      <button className="button">Add</button>
    </form>
  );
}

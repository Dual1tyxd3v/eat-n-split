import { useState } from 'react';

export default function AddFriend() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <form className="form-add-friend">
          <label>👫 Friend</label>
          <input type="text" />
          <label>🖼 Image URL</label>
          <input type="text" />
          <button className="button">Add</button>
        </form>
      )}
      <button className="button" onClick={() => setIsOpen(!isOpen)}>
        Add friend
      </button>
    </>
  );
}

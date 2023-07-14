import Button from '../button/button';

export default function AddFriend() {
  return (
    <>
      <form className="form-add-friend">
        <label>👫 Friend</label>
        <input type="text" />
        <label>🖼 Image URL</label>
        <input type="text" />
        <Button>Add</Button>
      </form>
      <Button>Add friend</Button>
    </>
  );
}

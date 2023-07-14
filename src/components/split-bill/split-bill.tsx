export default function SplitBill() {
  return (
    <form action="" className="form-split-bill">
      <h2>Split a bill with a #friend</h2>
      <label>💰 Bill value</label>
      <input type="text" />
      <label>🕴 Your expense</label>
      <input type="text" />
      <label>👫 #friends expense</label>
      <input type="text" disabled />
      <label htmlFor="">🤑 Who is paying the bill</label>
      <select name="" id="">
        <option value="user">You</option>
        <option value="friend">#friend</option>
      </select>
      <button className="button" >Split bill</button>
    </form>
  );
}

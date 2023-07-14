function App(): JSX.Element {
  return (
    <div className="app">
      <div className="sidebar">
        <ul>
          <li>
            <img src="" alt="text" />
            <h3>name</h3>
            {/*if - <p className="red"> You owe #friend 7$</p> */}
            {/*if + <p className="green">#friend owes you 7$</p> */}
            <p>You and #friend are even</p>
            <button className="button">Select</button>
          </li>
        </ul>
        <form className="form-add-friend">
          <label>👫 Friend</label>
          <input type="text" />
          <label>🖼 Image URL</label>
          <input type="text" />
          <button className="button">Add</button>
        </form>
        <button className="button">Add frined</button>
      </div>
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
        <button className="button">Split bill</button>
      </form>
    </div>
  );
}

export default App;

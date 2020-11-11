import React, { useState } from "react";
import NewItem from "./components/NewItem";
import ListItems from "./components/ListItems";
import { defaultState } from "./data";

const App = () => {

  const [items, setItems] = useState(defaultState);
  const packed = items.filter(v => v.packed);
  const unpacked = items.filter(v => !v.packed);
  const markAll = () => {
    setItems(items.map(v => ({ ...v, packed: false })))
    // setItems([...items, items.map(v => v.packed = false)])
  }
  const removeItem = (id) => {
    setItems(items.filter(v => v.id !== id))
  }
  const markOne = (id) => {
    setItems(items.map((i) =>
      i.id === id ? { ...i, packed: i.packed ? false : true } : i
    ))
  }
  const addItem = (item) => {
    setItems([item, ...items])
  }
  return (
    <div className="container py-3">
      <NewItem addItem={addItem} />
      <div className="row">
        <div className="col-md-5">
          <ListItems title="Unpacked Items" markOne={markOne} removeItem={removeItem} items={unpacked} />
        </div>
        <div className="offset-md-2 col-md-5">
          <ListItems title="Packed Items" markOne={markOne} removeItem={removeItem} items={packed} />
          <button className="btn btn-danger btn-lg btn-block" onClick={markAll}>
            Mark All As Unpacked
            </button>
        </div>
      </div>
    </div>
  );
}


export default App;

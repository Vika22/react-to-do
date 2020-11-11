import React, { useState, useMemo } from "react";
import NewItem from "./components/NewItem";
import ListItems from "./components/ListItems";
import { defaultState } from "./data";
import "./components/Item.css";
import { ItemContext } from "./components/context/itemContext";

const App = (props) => {
  const [items, setItems] = useState(defaultState);

  const packedItems = items.filter((item) => item.packed);
  const unPackedItems = items.filter((item) => !item.packed);

  const addItem = (newItem) => setItems([newItem, ...items]);

  const toggleItem = (toggledItem) =>
    setItems((a) =>
      a.map((item) =>
        item.id !== toggledItem.id
          ? item
          : { ...toggledItem, packed: !toggledItem.packed }
      )
    );

  const markAllUnPacked = () =>
    setItems(items.map((item) => ({ ...item, packed: false })));

  const removeItem = (id) => setItems((x) => x.filter((b) => b.id !== id));

  const value = useMemo(
    () => ({
      removeItem,
      toggleItem,
    }),
    []
  );

  return (
    <ItemContext.Provider value={value}>
      <div className="container py-3">
        <NewItem addItem={addItem} />
        <div className="row">
          <div className="col-md-5">
            <ListItems title="Unpacked Items" items={unPackedItems} />
          </div>
          <div className="offset-md-2 col-md-5">
            <ListItems title="Packed Items" items={packedItems} />
            <button
              className="btn btn-danger btn-lg btn-block"
              onClick={markAllUnPacked}
            >
              Mark All As Unpacked
            </button>
          </div>
        </div>
      </div>
    </ItemContext.Provider>
  );
};

export default App;

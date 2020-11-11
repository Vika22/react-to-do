import React, { useContext, memo } from "react";
import "./Item.css";
import { ItemContext } from "./context/itemContext";

const Item = memo(({ item }) => {
  const { toggleItem, removeItem } = useContext(ItemContext);
  console.log("Render");
  return (
    <li className="item-box">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={item.packed}
          onChange={() => toggleItem(item)}
          id={item.id}
        />
        <label className="form-check-label" htmlFor={item.id}>
          {item.value}
        </label>
      </div>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => removeItem(item.id)}
      >
        Remove
      </button>
    </li>
  );
});

export default Item;

import React from "react";
import "./Item.css";

const Item = ({ item, removeItem, markOne }) => {
  return (
    <div>
      <li className="item-box" key={item.id}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={item.packed}
            id={item.id}
            onChange={() => markOne(item.id)}
          />
          <label className="form-check-label" htmlFor={item.id}>
            {item.value}
          </label>
        </div>
        <button className="btn btn-secondary btn-sm" onClick={() => removeItem(item.id, item.packed)}>
          Remove
        </button>
      </li>

    </div>
  );
}


export default Item;

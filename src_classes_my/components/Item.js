import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <div>{
        <li className="item-box" key={item.id}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={item.packed}
              onChange={() => { this.props.changeMark(item.id) }}
              id={item.id}
            />
            <label className="form-check-label" htmlFor={item.id}>
              {" "}
              {item.value}
            </label>
          </div>
          <button className="btn btn-secondary btn-sm" onClick={() => { this.props.deleteItem(item.id) }}>
            Remove
        </button>
        </li>
      }
      </div>
    );
  }
}

export default Item;

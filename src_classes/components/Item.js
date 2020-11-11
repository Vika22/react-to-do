import React, { Component, memo } from "react";
import PropTypes from "prop-types";
import "./Item.css";
import AppContext from "./context/AppContext";

class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <AppContext.Consumer>
        {({ deleteItem, changePackStatus }) => (
          <li className="item-box">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={item.packed}
                onChange={() => {
                  changePackStatus(item.id);
                }}
                id={item.id}
              />
              <label className="form-check-label" htmlFor={item.id}>
                {item.value}
              </label>
            </div>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => deleteItem(item.id)}
            >
              Remove
            </button>
          </li>
        )}
      </AppContext.Consumer>
    );
  }
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    packed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default memo(Item);

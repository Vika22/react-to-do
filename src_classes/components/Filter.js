import React, { Component } from "react";
import PropTypes from "prop-types";

class Filter extends Component {
  render() {
    const { onChange, filter } = this.props;

    return (
      <div className="mb-3">
        <input
          onChange={({ target }) => onChange(target.value)}
          value={filter}
          type="text"
          className="form-control"
        />
      </div>
    );
  }
}
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;

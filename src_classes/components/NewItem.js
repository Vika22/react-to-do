import React, { Component } from "react";
import PropTypes from "prop-types";
import { generate as id } from "shortid";

class NewItem extends Component {
  state = {
    value: "",
  };

  handleChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem({ value: this.state.value, id: id(), packed: false });
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-10">
            <input
              onChange={this.handleChange}
              className="form-control mb-3"
              type="text"
              value={value}
            />
          </div>
          <div className="col-md-2">
            <input className="btn btn-success" type="submit" value="Add item" />
          </div>
        </div>
      </form>
    );
  }
}

NewItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default NewItem;

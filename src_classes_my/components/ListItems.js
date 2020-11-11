import React, { Component } from "react";
import Item from "./Item";
import Filter from "./Filter";
import PropTypes from "prop-types";

class ListItems extends Component {
  state = { filter: "" };

  updateFilter = (searchTerm) => {
    this.setState({ filter: searchTerm });
  };

  render() {
    const { title, items } = this.props;
    const { filter } = this.state;
    return (
      <section>
        <h3 className="mb-3">{title}</h3>
        <Filter filter={filter} onChange={this.updateFilter} />
        <ul className="mb-3 p-0">
          {items
            .filter((i) =>
              i.value
                .toLowerCase()
                .includes(filter.toLowerCase())
            )
            .map((i) => {
              return <Item key={i.id} item={i} deleteItem={this.props.deleteItem} changeMark={this.props.changeMark} />;
            })}
        </ul>
      </section>
    );
  }
}
ListItems.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

ListItems.defaultProps = {
  title: "List of items",
};
export default ListItems;

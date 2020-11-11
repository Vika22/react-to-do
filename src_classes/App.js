import React, { Component, memo } from "react";
import NewItem from "./components/NewItem";
import ListItems from "./components/ListItems";
import AppContext from "./components/context/AppContext";
import { defaultState } from "./data";

class App extends Component {
  state = {
    items: defaultState,
  };

  addItem = (item) => {
    const { items } = this.state;
    if (items.find((v) => v.value === item.value)) {
      return;
    }
    this.setState({ items: [item, ...this.state.items] });
  };

  deleteItem = (id) => {
    this.setState(({ items }) => ({ items: items.filter((i) => i.id !== id) }));
  };

  changePackStatus = (id) => {
    const { items } = this.state;
    this.setState({
      items: items.map((i) =>
        i.id === id ? { ...i, packed: i.packed ? false : true } : i
      ),
    });
  };

  markAll = () => {
    const { items } = this.state;
    this.setState({
      items: items.map((i) => (i.packed ? { ...i, packed: false } : i)),
    });
  };

  val = {
    deleteItem: this.deleteItem,
    changePackStatus: this.changePackStatus,
  };

  render() {
    const { items } = this.state;

    return (
      <AppContext.Provider value={this.val}>
        <div className="container py-3">
          <NewItem addItem={this.addItem} />
          <div className="row">
            <div className="col-md-5">
              <ListItems
                title="Unpacked Items"
                items={items.filter((i) => !i.packed)}
              />
            </div>
            <div className="offset-md-2 col-md-5">
              <ListItems
                title="Packed Items"
                items={items.filter((i) => i.packed)}
              />
              <button
                onClick={this.markAll}
                className="btn btn-danger btn-lg btn-block"
              >
                Mark All As Unpacked
              </button>
            </div>
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;

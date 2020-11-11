import React, { Component } from "react";
import NewItem from "./components/NewItem";
import ListItems from "./components/ListItems";
import { defaultState } from "./data";

class App extends Component {
  state = {
    items: defaultState
  }
  addItem = (value) => {
    this.setState({ items: [value, ...this.state.items] })
  }
  changeMark = (id) => {
    this.setState({
      items: this.state.items.map((i) =>
        i.id === id ? { ...i, packed: i.packed ? false : true } : i
      )
    })
  }
  markAll = () => {
    this.setState({
      items: this.state.items.map(i =>
        i ? { ...i, packed: true } : i
      )
    })
  }
  deleteItem = (id) => {
    this.setState({
      items: this.state.items.filter(v => v.id !== id)
    })
  }

  render() {
    return (
      <div className="container py-3">
        <NewItem addItem={this.addItem} />
        <div className="row">
          <div className="col-md-5">
            <ListItems deleteItem={this.deleteItem} changeMark={this.changeMark} title="Unpacked Items" items={this.state.items.filter((i) => !i.packed)} />
          </div>
          <div className="offset-md-2 col-md-5">
            <ListItems deleteItem={this.deleteItem} changeMark={this.changeMark} title="Packed Items" items={this.state.items.filter((i) => i.packed)} />
            <button className="btn btn-danger btn-lg btn-block" onClick={this.markAll}>
              Mark All As Unpacked
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

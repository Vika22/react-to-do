import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

const ListItems = (props) => {
  const [value, setValue] = useState('');
  const filter = (e) => {
    setValue(e.target.value);
  }
  const search = () => {
    return props.items
      .filter(item =>
        item.value.toLowerCase().includes(value.toLowerCase())
      )
      .map((item) => <Item key={item.id} item={item} markOne={props.markOne} removeItem={props.removeItem} />)
  }

  return (
    <section>
      <h3 className="mb-3">{props.title}</h3>
      <Filter filter={filter} value={value} />
      <ul className="mb-3 p-0">
        {search()}
      </ul>
    </section>
  );
}

export default ListItems;

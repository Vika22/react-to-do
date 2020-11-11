import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

const ListItems = ({ title, items }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const updateSearchTerm = (e) => setSearchTerm(e.target.value);

  const getBody = () =>
    items
      .filter((item) =>
        item.value.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((item) => <Item key={item.id} item={item} />);

  return (
    <section>
      <h3 className="mb-3">{title}</h3>

      <Filter searchTerm={searchTerm} onChange={updateSearchTerm} />

      <ul className="list-group mb-3">{getBody()}</ul>
    </section>
  );
};

export default ListItems;

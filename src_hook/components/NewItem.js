import React, { useState } from "react";
import { generate as id } from "shortid";

const NewItem = ({ addItem }) => {
  const [value, setValue] = useState("");

  const handleChange = e => setValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    addItem({ value, id: id(), packed: false });
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-10">
          <input
            className="form-control mb-3"
            type="text"
            onChange={handleChange}
            value={value}
          />
        </div>
        <div className="col-md-2">
          <input className="btn btn-success" type="submit" value="Send" />
        </div>
      </div>
    </form>
  );
};

export default NewItem;

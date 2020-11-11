import React, { useState } from "react";
import { generate as id } from "shortid";

const NewItem = (props) => {
  const [value, newValue] = useState('');
  const newItemVal = (e) => { newValue(e.target.value); }
  const addItem = (e) => {
    e.preventDefault();
    props.addItem({ id: id(), value, packed: false });
    newValue('');
  }
  return (
    <form onSubmit={addItem} >
      <div className="row">
        <div className="col-md-10">
          <input className="form-control mb-3" onChange={newItemVal} type="text" value={value} />
        </div>
        <div className="col-md-2">
          <input className="btn btn-success" type="submit" value="Add item" />
        </div>
      </div>
    </form>
  );
}


export default NewItem;

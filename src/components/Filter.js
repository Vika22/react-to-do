import React from "react";


const Filter = (props) => {
    return (
        <div className="mb-3">
            <input
                onChange={props.filter}
                value={props.value}
                type="text"
                className="form-control"
            />
        </div>
    );
}


export default Filter;

import React from "react";
import './Filter.css';

function Filter({filterData}) {
    return (
        <div className="highLevelDiv">
            {
                filterData.map((data) => (
                        <button className="buttonId" key = {data.id}>
                            {data.title}
                        </button>
                ))
            }
            
        </div>
    );
}

export default Filter;
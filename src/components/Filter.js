import React from "react";
import './Filter.css';

function Filter({filterData, category, setCategory}) {

    const buttonHandler = (title) => {
        setCategory(title);
    };

    return (
        <div className="highLevelDiv">
            {
                filterData.map((data) => (
                    <button className="buttonId1" key = {data.id} onClick={() => buttonHandler(data.title)}>
                            {data.title}
                    </button>
                ))
            }
            
        </div>
    );
}

export default Filter;
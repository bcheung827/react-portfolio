import React from "react";

function TechListItem(props) {

    return props.techItems.map((technology, i) => {
            return <li className="techUsed" key={i}>{technology}</li>
    })
    
}

export default TechListItem;

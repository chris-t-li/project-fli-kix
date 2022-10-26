import React from "react";

function ShoePart({ part, selectedPart, selectShoePart }) {

    function handleClick(e) {
        selectShoePart(e.target.textContent);
    }

    return (
        <div
            onClick={handleClick}
            className="shoePart"
            style={{ backgroundColor: part === selectedPart ? "#F67280" : null }}
        >
            <h4>{part}</h4>
        </div>
    )
}

export default ShoePart;
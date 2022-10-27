import React from "react";

function ShoePart({ part, selectedPart, selectShoePart, isSelect, setIsSelect }) {

    function handleClick(e) {
        selectShoePart(e.target.textContent);
        setIsSelect(true);
    }

    function handleMouseOver(e) {
        selectShoePart(e.target.textContent)
    }

    return (
        <div

            onClick={handleClick}
            className="shoePart"
            style={{ backgroundColor: part === selectedPart ? "#F67280" : null }}
        >
            <h4 onMouseOver={isSelect ? null : handleMouseOver}>{part}</h4>
        </div>
    )
}

export default ShoePart;
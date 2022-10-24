import React from "react";

function SelectShoePart() {
    function handleClick(e) {
        console.log(e.target)
    }

    return (
        <div id="selectShoePart">
            <h3>Select part of shoe below</h3>
            <div onClick={handleClick} className="shoePart" ><h4>EyeStay</h4></div>
            <div onClick={handleClick} className="shoePart"><h4>Foxing</h4></div>
            <div onClick={handleClick} className="shoePart"><h4>Heel</h4></div>
            <div onClick={handleClick} className="shoePart"><h4>Lace</h4></div>
            <div onClick={handleClick} className="shoePart"><h4>Quarter</h4></div>
            <div onClick={handleClick} className="shoePart"><h4>Sole</h4></div>
            <div onClick={handleClick} className="shoePart"><h4>Swoosh</h4></div>
            <div onClick={handleClick} className="shoePart"><h4>Tip</h4></div>
            <div onClick={handleClick} className="shoePart"><h4>Vamp</h4></div>
        </div>
    );
}

export default SelectShoePart;
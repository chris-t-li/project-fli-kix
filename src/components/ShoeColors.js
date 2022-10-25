import React from "react";

function ShoeColors({ changeColor }) {

    const colorsArray = [
        "#e1e851",
        "#8cd147",
        "#4a9ccf",
        "#661f45",
        "#1e2024"
    ]

    // for (let i = 0; i < colorsArray.length; i++) {
    //     colorsArray[i] = changeColor;
    // }

    function handleClick(e) {
        //let hex = e.target.value
        changeColor(e.target.value)
    }

    return (
        <div className="colors">
            <button onClick={handleClick} className="color" style={{ "backgroundColor": "#e1e851" }} value="#e1e851"></button>
            <button onClick={handleClick} className="color" style={{ "backgroundColor": "#8cd147" }} value="#8cd147"></button>
            <button onClick={handleClick} className="color" style={{ "backgroundColor": "#4a9ccf" }} value="#4a9ccf"></button>
            <button onClick={handleClick} className="color" style={{ "backgroundColor": "#661f45" }} value="#661f45"></button>
            <button onClick={handleClick} className="color" style={{ "backgroundColor": "#1e2024" }} value="#1e2024"></button>
        </div>
    )
}

export default ShoeColors
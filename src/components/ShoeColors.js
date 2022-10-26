import React from "react";

function ShoeColors({ changeColor }) {

    const colorsArray = [
        "#e1e851",
        "#8cd147",
        "#4a9ccf",
        "#661f45",
        "#1e2024",
        "#800000",
        "#e28743",
        "#FFFFFF"
    ]

    // for (let i = 0; i < colorsArray.length; i++) {
    //     colorsArray[i] = changeColor;
    // }

    function handleClick(e) {
        //let hex = e.target.value
        console.log("clicked")
        changeColor(e.target.value)
    }

    return (
        <div className="colorContainer">
            <button onClick={handleClick} className="color" style={{ "backgroundColor": "#e1e851" }} value="#e1e851"></button>
            <button onClick={handleClick} className="color" style={{ "backgroundColor": "#8cd147" }} value="#8cd147"></button>
            <button onClick={handleClick} className="color" style={{ "backgroundColor": "#4a9ccf" }} value="#4a9ccf"></button>
            <button onClick={handleClick} className="color" style={{ "backgroundColor": "#661f45" }} value="#661f45"></button>
            <button onClick={handleClick} className="color" style={{ "backgroundColor": "#1e2024" }} value="#1e2024"></button>
            <button onClick={handleClick} className="color" style={{ "backgroundColor": "#800000" }} value="#800000"></button>
            <button onClick={handleClick} className="color" style={{ "backgroundColor": "#e28743" }} value="#e28743"></button>
            <button onClick={handleClick} className="color" style={{ "backgroundColor": "#ffffff" }} value="#ffffff"></button>
        </div>
    )
}

export default ShoeColors
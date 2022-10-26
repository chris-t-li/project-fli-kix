import React from "react";

function ShoeColors({ changeColor }) {

    const colorsArray = [
        "#860111",
        "#9D0218",
        "#B4041E",
        "#CB0525",
        "#FF872C",
        "#FE612C",
        "#FD3A2D",
        "#F11D28",
        "#FFA12C",
        "#FFFFFF"
    ]
    
    // const colorsArray = [
    //     "#e1e851",
    //     "#8cd147",
    //     "#4a9ccf",
    //     "#661f45",
    //     "#1e2024",
    //     "#800000",
    //     "#e28743",
    //     "#FFFFFF"
    // ]

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
            <button onClick={handleClick} className="color" style={{ "backgroundColor": "#860111" }} value="#860111"></button>
            <button onClick={handleClick} className="color" style={{ "backgroundColor": "#9D0218" }} value="#9D0218"></button>
            <button onClick={handleClick} className="color" style={{ "backgroundColor": "#B4041E" }} value="#B4041E"></button>
            <button onClick={handleClick} className="color" style={{ "backgroundColor": "#CB0525" }} value="#CB0525"></button>
            <button onClick={handleClick} className="color" style={{ "backgroundColor": "#FF872C" }} value="#FF872C"></button>
            <button onClick={handleClick} className="color" style={{ "backgroundColor": "#FE612C" }} value="#FE612C"></button>
            <button onClick={handleClick} className="color" style={{ "backgroundColor": "#FD3A2D" }} value="#FD3A2D"></button>
            <button onClick={handleClick} className="color" style={{ "backgroundColor": "#F11D28" }} value="#F11D28"></button>
        </div>
    )
}

export default ShoeColors
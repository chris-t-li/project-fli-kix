import React from "react";

function ShoeColors() {

    const colorsArray = [
        "#8cd147",
        "#4a9ccf",
        "#661f45",
        "#1e2024"
    ]

    for (let i = 0; i < colorsArray.length; i++) {
        colorsArray[i] = changeColor;
      }

    function changeColor(e) {
        let hex = e.target.value
    }

    return (
        <div className="colors">
          <button onClick={changeColor} className="color" style={{color: "#e1e851"}} data-hex="#e1e851"></button>
          <button className="color" style={{color: "#8cd147"}} data-hex="#8cd147"></button>
          <button className="color" style={{color: "#4a9ccf"}} data-hex="#4a9ccf"></button>
          <button className="color" style={{color: "#661f45"}} data-hex="#661f45"></button>
          <button className="color" style={{color: "#1e2024"}} data-hex="#1e2024"></button>
        </div>
    )
}

export default ShoeColors
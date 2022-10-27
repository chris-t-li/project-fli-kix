import React, { useState } from "react";
import ColorTile from "./ColorTile";

function ShoeColors({ changeColor }) {
    //const [ind, setInd] = useState(true);
    let ind = true;

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

    function handleOnMouseLeave() {
        changeColor("#ffffff")
        //setInd(false);
    }

    return (
        <div
            className="colorContainer"
        // onMouseLeave={ind ? handleOnMouseLeave : null}
        >
            {colorsArray.map(hexColor => {
                return (
                    <ColorTile
                        key={hexColor}
                        hexColor={hexColor}
                        changeColor={changeColor}
                    />)
            })}
        </div>
    )
}

export default ShoeColors
import React from "react";
import ColorTile from "./ColorTile";

function ShoeColors({ setSelectedPart, changeColor, isColorSelect, setIsColorSelect }) {

    const colorsArray = [
        // reds
        "#860111",
        "#9D0218",
        "#B4041E",
        "#CB0525",
        // oranges
        "#FD3A2D",
        "#FE612C",
        "#FF872C",
        "#FFA12C",
        // yellows    
        "#FFBF2E",
        "#FFE134",
        "#FFFF00",
        "#EBF2B3",
        // greens
        "#1B4001",
        "#3B7302",
        "#65A603",
        "#9BBF65",
        // blues
        "#03045E",
        "#0077B6",
        "#00B4D8",
        "#90E0EF",
        // purples
        "#3C1361",
        "#52307C",
        "#B491C8",
        "#BCA0DC",
        // greyscale
        "#000000",
        "#333333",
        "#999999",
        "#FFFFFF"
    ]

    return (
        <div
            className="colorContainer"
        >
            {colorsArray.map(hexColor => {
                return (
                    <ColorTile
                        key={hexColor}
                        hexColor={hexColor}
                        changeColor={changeColor}
                        isColorSelect={isColorSelect}
                        setIsColorSelect={setIsColorSelect}
                        setSelectedPart={setSelectedPart}
                    />)
            })}
        </div>
    )
}

export default ShoeColors
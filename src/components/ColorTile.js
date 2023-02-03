function ColorTile({ setSelectedPart, hexColor, changeColor, isColorSelect, setIsColorSelect }) {

    function handleClick(e) {
        changeColor(e.target.value);
        setIsColorSelect(true); // we have selected a color; deactivate mouseOver 
        setSelectedPart("");
    }

    function handleMouseOver(e) {
        changeColor(e.target.value);
    }

    return (
        <button
            onClick={handleClick}
            onMouseOver={!isColorSelect ? handleMouseOver : null}
            className="color"
            style={{ "backgroundColor": hexColor }}
            value={hexColor}>

        </button>
    )
}

export default ColorTile;
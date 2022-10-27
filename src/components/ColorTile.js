function ColorTile({ hexColor, changeColor }) {
    let ind = true; // temp assign. Need to change to state.

    function handleClick(e) {
        changeColor(e.target.value);
    }

    function handleMouseOver(e) {
        changeColor(e.target.value);
    }

    return (
        <button
            onClick={handleClick}
            onMouseOver={ind ? handleMouseOver : null}
            className="color"
            style={{ "backgroundColor": hexColor }}
            value={hexColor}>

        </button>
    )
}

export default ColorTile;
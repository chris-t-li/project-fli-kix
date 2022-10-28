import React from "react";

function ShoeFrameGallery({ shoe, editShoe }) {
    function handleClick() {
        if (shoe.isBought === false)
            editShoe(shoe);
    }

    return (
        <div className="card-containers">
            <img
                src={shoe.imageStr}
                alt="shoe"
                onClick={handleClick}
            />
        </div>
    )
}

export default ShoeFrameGallery;

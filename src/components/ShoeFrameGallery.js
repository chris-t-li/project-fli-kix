import React from "react";

function ShoeFrameGallery({ shoe }) {

    return (
        <div className="card-containers">
            <img src={shoe.imageStr} alt="shoe" />
        </div>
    )
}

export default ShoeFrameGallery;

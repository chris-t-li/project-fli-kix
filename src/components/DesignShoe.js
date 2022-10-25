import React, { useState } from "react";
import ShoePart from "./ShoePart";
import Shoe from "./Shoe";

const shoeParts = ["EyeStay", "Foxing", "Heel", "Lace", "Quarter", "Swoosh", "Sole", "Tip", "Vamp"];

function DesignShoe() {
    const [selectedPart, setSelectedPart] = useState("");

    function selectShoePart(e) {
        setSelectedPart(e)
    }

    return (
        <div>
            <div id="selectShoePart">
                <h3>Select part of shoe below</h3>

                {shoeParts.map(part => {
                    return <ShoePart
                        part={part}
                        key={part}
                        selectedPart={selectedPart}
                        selectShoePart={selectShoePart}
                    />
                })
                }
                <Shoe
                    selectedPart={selectedPart}
                />

            </div>
            <div id="shoeContainer"></div>
        </div>
    );
}

export default DesignShoe;
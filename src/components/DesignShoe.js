import React, { useState } from "react";
import ShoePart from "./ShoePart";
import Shoe from "./Shoe";

const shoeParts = ["EyeStay", "Foxing", "Heel", "Lace", "Lining", "Quarter", "Swoosh", "Sole", "Tongue", "Tip", "Vamp"];

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
            </div>
            <Shoe
                    selectedPart={selectedPart}
                />
        </div>
    );
}

export default DesignShoe;
import React, { useState } from "react";
import ShoePart from "./ShoePart";
import Shoe from "./Shoe";
import domtoimage from "dom-to-image-more";

const shoeParts = ["EyeStay", "Foxing", "Heel", "Lace", "Lining", "Quarter", "Swoosh", "Sole", "Tongue", "Tip", "Vamp"];

function DesignShoe({ renderNewShoe }) {
    const [selectedPart, setSelectedPart] = useState("");

    function selectShoePart(e) {
        setSelectedPart(e)
    }

    // Converts DOM element to image (blob) and then to a dataUrl. Ref: "https://stackoverflow.com/questions/73676544/how-to-save-domtoimage-to-localstorage"
    function addNewShoe(colorObj) {
        domtoimage.toBlob(document.getElementById("container"))
            .then(function (blob) {
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = function () {
                    var base64String = reader.result;
                    localStorage.setItem("design-image3", base64String);

                    // POST New Shoe to db.json
                    fetch("http://localhost:3010/kix", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        },
                        body: JSON.stringify({
                            "type": "AirForce Max",
                            "isNFK": false,
                            "isBought": false,
                            "color-pallet": colorObj,
                            "imageStr": base64String
                        })
                    })
                        .then(res => res.json())
                        .then(obj => renderNewShoe(obj))
                }

            })
    }

    return (
        <div id="designScreen">
            <div id="selectShoePart">
                <h3>🔥 Select part of shoe below 👇</h3>
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
                addNewShoe={addNewShoe}
            />
        </div>
    );
}

export default DesignShoe;
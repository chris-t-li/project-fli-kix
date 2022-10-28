import React, { useState } from "react";
import ShoePart from "./ShoePart";
import Shoe from "./Shoe";
import { useHistory } from "react-router-dom";
import domtoimage from "dom-to-image-more";

const shoeParts = ["EyeStay", "Foxing", "Heel", "Lace", "Lining", "Quarter", "Swoosh", "Sole", "Tongue", "Tip", "Vamp", "Card"];

function DesignShoe({ renderNewShoe, colorObj, setColorObj }) {
    const [selectedPart, setSelectedPart] = useState("");
    const [isSelect, setIsSelect] = useState(false); // Has a shoe part been selected? 
    const [isColorSelect, setIsColorSelect] = useState(false); // Has a ColorTile been selected? State is used to hover over colors


    let history = useHistory();

    function selectShoePart(e) {
        setSelectedPart(e)
    }

    // Converts DOM element to image (blob) and then to a dataUrl. Ref: "https://stackoverflow.com/questions/73676544/how-to-save-domtoimage-to-localstorage"
    function addNewShoe(colorObj) {
        const colorValues = Object.values(colorObj);
        const ETHprice = 0.1 + 0.0175 * Math.max(0, new Set(colorValues).size - 2);
        setSelectedPart("");

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
                            "imageStr": base64String,
                            "price": ETHprice.toFixed(3),
                        })
                    })
                        .then(res => res.json())
                        .then(obj => {
                            renderNewShoe(obj)
                            history.push("/gallery")
                        })
                }

            })
    }

    return (
        <div id="designScreen">
            <div id="selectShoePart" onMouseLeave={() => setIsSelect(false)}>
                <h3>🔥 Select part of shoe below 👇</h3>
                {shoeParts.map(part => {
                    return <ShoePart
                        part={part}
                        key={part}
                        selectedPart={selectedPart}
                        selectShoePart={selectShoePart}
                        isSelect={isSelect}
                        setIsSelect={setIsSelect}
                        setIsColorSelect={setIsColorSelect}
                    />
                })
                }
            </div>
            <Shoe
                selectedPart={selectedPart}
                setSelectedPart={setSelectedPart}
                addNewShoe={addNewShoe}
                isColorSelect={isColorSelect}
                setIsColorSelect={setIsColorSelect}
                colorObj={colorObj}
                setColorObj={setColorObj}
            />
        </div>
    );
}

export default DesignShoe;
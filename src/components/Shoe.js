import React, { useState } from "react";
// import shoe from './shoe.svg';
import finalShoe from "../assets/finalShoe.png";
import ShoeColors from "./ShoeColors";
import EyeStay from "./shoeParts/EyeStay";
import Foxing from "./shoeParts/Foxing";
import Heel from "./shoeParts/Heel.js"
import Lace from "./shoeParts/Lace";
import Quarter from "./shoeParts/Quarter";
import Swoosh from "./shoeParts/Swoosh";
import Sole from "./shoeParts/Sole";
import Tip from "./shoeParts/Tip";
import Vamp from "./shoeParts/Vamp";
import Lining from "./shoeParts/Lining";
import Tongue from "./shoeParts/Tongue";


function Shoe({ selectedPart, addNewShoe }) {
    // Define State - {"ShoePart": "Color"}
    const [colorObj, setColorObj] = useState({
        "Swoosh": "#ffffff",
        "EyeStay": "#ffffff",
        "Foxing": "#ffffff",
        "Heel": "#ffffff",
        "Lace": "#ffffff",
        "Quarter": "#ffffff",
        "Sole": "#ffffff",
        "Tip": "#ffffff",
        "Vamp": "#ffffff",
        "Lining": "#ffffff",
        "Tongue": "#ffffff",
    })

    // const [colorObj, setColorObj] = useState({
    //     "Swoosh": "#ff0000",
    //     "EyeStay": "#020202",
    //     "Foxing": "#d0b300",
    //     "Heel": "#00dfbc",
    //     "Lace": "#0081c6",
    //     "Quarter": "#e9006f",
    //     "Sole": "#FFFFFF",
    //     "Tip": "#d0b300",
    //     "Vamp": "#00dfbc",
    //     "Lining": "#e9006f",
    //     "Tongue": "#00dfbc",
    // })

    // Dynamically Update Color onClick
    function changeColor(color) {
        setColorObj({ ...colorObj, [selectedPart]: color })
    }

    // Dynamically Update Color onMouseOver
    function dynamicShowColor(color) {
        setColorObj({ ...colorObj, [selectedPart]: color })
    }

    function handleClick() {
        console.log("hi")
        addNewShoe(colorObj)
    }

    return (
        <div>
            <div id="container">
                {/* Layered <SVG><polygon> Components*/}
                <Swoosh colorObj={colorObj} selectedPart={selectedPart} />
                <EyeStay colorObj={colorObj} selectedPart={selectedPart} />
                <Lace colorObj={colorObj} selectedPart={selectedPart} />
                <Foxing colorObj={colorObj} selectedPart={selectedPart} />
                <Heel colorObj={colorObj} selectedPart={selectedPart} />
                <Quarter colorObj={colorObj} selectedPart={selectedPart} />
                <Sole colorObj={colorObj} selectedPart={selectedPart} />
                <Tip colorObj={colorObj} selectedPart={selectedPart} />
                <Vamp colorObj={colorObj} selectedPart={selectedPart} />
                <Lining colorObj={colorObj} selectedPart={selectedPart} />
                <Tongue colorObj={colorObj} selectedPart={selectedPart} />
                {/* Base Shoe Image */}
                <img id="shoe" src={finalShoe} alt="shoe" />
                {/* Color Pallet - Right Hand Side */}
                <ShoeColors
                    changeColor={changeColor}
                    dynamicShowColor={dynamicShowColor}
                />
            </div>
            <button id="saveAsNfk" onClick={handleClick}>Save as NFK</button>
        </div>
    )
}

export default Shoe


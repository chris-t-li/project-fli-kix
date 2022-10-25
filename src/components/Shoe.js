import React, { useState } from "react";
// import shoe from './shoe.svg';
import Artboard from "../assets/Artboard 1.png";
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


function Shoe({ selectedPart }) {

    const [colorObj, setColorObj] = useState({
        "Swoosh": "#ff0000",
        "EyeStay": "#020202",
        "Foxing": "#d0b300",
        "Heel": "#00dfbc",
        "Lace": "#0081c6",
        "Quarter": "#e9006f",
        "Sole": "#FFFFFF",
        "Tip": "#d0b300",
        "Vamp": "#00dfbc",
    })

    function changeColor(color) {
        setColorObj({ ...colorObj, [selectedPart]: color })
    }
    console.log("In shoe: ", colorObj)

    return (
        <div id="container">
            <Swoosh colorObj={colorObj} />
            <EyeStay colorObj={colorObj} />
            <Lace colorObj={colorObj} />
            <Foxing colorObj={colorObj} />
            <Heel colorObj={colorObj} />
            <Quarter colorObj={colorObj} />
            <Sole colorObj={colorObj} />
            <Tip colorObj={colorObj} />
            <Vamp colorObj={colorObj} />

            <img id="shoe" src={Artboard} alt="shoe" />
            <ShoeColors changeColor={changeColor} />
        </div>
    )
}

export default Shoe


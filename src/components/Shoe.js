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


function Shoe() {
    const [color, setColor] = useState("#ff0000")

    function changeSwooshColor(color) {
        setColor(color);
    }

    return (
        <div id="container">
            <Swoosh />
            <EyeStay />
            <Lace />
            <Foxing />
            <Heel />
            <Quarter />
            <Sole />
            <Tip />
            <Vamp />

            <img id="shoe" src={Artboard} alt="shoe" />
            <ShoeColors changeSwooshColor={changeSwooshColor} />
        </div>
    )
}

export default Shoe


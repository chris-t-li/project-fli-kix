import React, { useState } from "react";
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
import domtoimage from "dom-to-image";

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

    function convertToImg() {
        const shoeImage = document.getElementById("container");

        domtoimage.toJpeg(shoeImage, { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'my-image-name.jpeg';
                link.href = dataUrl;
                link.click();
            });
    }

    return (
        <div id="container">
            {/* <div id="completedShoeImage"> */}
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
            {/* </div> */}


            <ShoeColors changeColor={changeColor} />
            <button id="convert-btn" onClick={convertToImg}>Convert to NFK</button>

        </div>
    )
}

export default Shoe


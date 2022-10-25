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

import sample from "../assets/sampleShoe.png";

function ShoeCard() {

    return (
        <div className="shoe-Card">
            <h3>Name of Shoe</h3>
            <img src={sample} alt="shoe design" />
            <div id="shortCardImg">
                {/* <Swoosh /> */}
                {/* <EyeStay />
                <Lace />
                <Foxing />
                <Heel />
                <Quarter />
                <Sole />
                <Tip />
                <Vamp /> */}
                {/* <img id="shoe" src={Artboard} alt="shoe" style={{ width: "500px" }} /> */}
            </div>

            <p>Price: $--</p>
            <p>Design details</p>


        </div>
    )
}

export default ShoeCard;
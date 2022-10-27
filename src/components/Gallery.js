import ShoeFrameGallery from "./ShoeFrameGallery";
import { Link } from "react-router-dom";

function Gallery({ shoeData, buyShoe }) {

    return (
        <div id="gallery">
            {shoeData.map(shoe => {
                const shoeColorParams = shoe["color-pallet"];

                function handleClick() {
                    buyShoe(shoe);
                }
                return (
                    <div className="shoe-card" key={shoe.id}>
                        <h3>{shoe.type}</h3>
                        <div className="shoe-card-img">
                            <ShoeFrameGallery key={shoe.id}
                                shoe={shoe}
                                shoeColorParams={shoeColorParams}
                            />
                        </div>
                        <p>{shoe.price} ETH</p>
                        <Link to="/buy">
                            <button id="buy-sold" onClick={handleClick} disabled={shoe.isBought ? true : null} >
                                {shoe.isBought ? "SOLD" : "BUY"}
                            </button>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

export default Gallery;
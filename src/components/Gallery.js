import ShoeFrameGallery from "./ShoeFrameGallery";
import { Link } from "react-router-dom";

function Gallery({ shoeData, buyShoe }) {

    return (
        <div >
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

                        <p>Price: $--</p>
                        <p>Design details</p>
                        <Link to="/buy">
                            <button onClick={handleClick}>
                                {shoe.isBought ? "SOLD" : "BUY"}
                            </button>
                        </Link>
                        {/* {shoe.isBought ?  */}
                            {/* <div className="shoe-bought">
                            <h4>SOLD</h4>
                            
                    
                        </div> */}
                    </div>
                )
            })}
        </div>
    );
}

export default Gallery;
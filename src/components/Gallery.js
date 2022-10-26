import ShoeFrameGallery from "./ShoeFrameGallery";

function Gallery({ shoeData }) {

    return (
        <div >
            {shoeData.map(shoe => {
                const shoeColorParams = shoe["color-pallet"];
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
                        <button>{shoe.isBought ? "SOLD" : "BUY"}</button>
                    </div>
                )
            })}
        </div>
    );
}

export default Gallery;
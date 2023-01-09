import React, { useEffect, useState } from "react";
import DesignShoe from "./DesignShoe";
import Home from "./Home";
import Gallery from "./Gallery";
import Buy from "./Buy";
import { Route, useHistory } from "react-router-dom";

function Main() {
    const [shoeData, setShoeData] = useState([]);
    const [checkoutShoe, setCheckoutShoe] = useState({});
    //    const [editShoeColors, setEditShoeColors] = useState(); // Make edits to shoe colors

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
        "Card": "#ffffff"
    })

    let history = useHistory();

    useEffect(() => {
        fetch("https://fli-kix-server.onrender.com/kix")
            .then(res => res.json())
            .then(data => {
                return setShoeData(data)
            })
    }, []);

    function renderNewShoe(obj) {
        setShoeData([obj, ...shoeData])
    }

    function buyShoe(shoe) {
        setCheckoutShoe(shoe);
    }

    function editShoe(shoe) {
        //console.log("In Main", shoe);
        fetch(`https://fli-kix-server.onrender.com/kix/${shoe.id}`)
            .then(res => res.json())
            .then(shoe => {
                setColorObj(shoe["color-pallet"])
                history.push("/design")
            })
            .catch(err => console.error(err))
    }

    function resetShoeColors(resetColorObj) {
        setColorObj(resetColorObj);
    }

    function updateBoughtShoe(boughtShoe) {
        const filtArr = [...shoeData].filter(shoe => {
            return boughtShoe.id !== shoe.id
        })
        setShoeData([boughtShoe, ...filtArr])
    }

    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/design">
                <DesignShoe renderNewShoe={renderNewShoe} colorObj={colorObj} setColorObj={setColorObj} resetShoeColors={resetShoeColors} />
            </Route>
            <Route path="/gallery">
                <Gallery shoeData={shoeData} buyShoe={buyShoe} editShoe={editShoe} />
            </Route>
            <Route path="/buy">
                <Buy
                    shoeData={shoeData}
                    checkoutShoe={checkoutShoe}
                    updateBoughtShoe={updateBoughtShoe}
                />
            </Route>
        </>
    );
}

export default Main;
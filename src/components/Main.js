import React, { useEffect, useState } from "react";
import DesignShoe from "./DesignShoe";
import Home from "./Home";
import Gallery from "./Gallery";
import Buy from "./Buy";
import { Route } from "react-router-dom";

function Main() {
    const [shoeData, setShoeData] = useState([]);
    const [checkoutShoe, setCheckoutShoe] = useState({});

    useEffect(() => {
        fetch("http://localhost:3010/kix")
            .then(res => res.json())
            .then(data => {
                return setShoeData(data)
            })
    }, []);

    function renderNewShoe(obj) {
        setShoeData([...shoeData, obj])
    }

    function buyShoe(shoe) {
        setCheckoutShoe(shoe);
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
                <DesignShoe renderNewShoe={renderNewShoe} />
            </Route>
            <Route path="/gallery">
                <Gallery shoeData={shoeData} buyShoe={buyShoe} />
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
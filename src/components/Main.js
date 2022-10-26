import React, { useEffect, useState } from "react";
import DesignShoe from "./DesignShoe";
import Home from "./Home";
import Gallery from "./Gallery";
import Buy from "./Buy";
import { Route } from "react-router-dom";

function Main() {
    const [shoeData, setShoeData] = useState([]);

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

    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/design">
                <DesignShoe renderNewShoe={renderNewShoe} />
            </Route>
            <Route path="/gallery">
                <Gallery shoeData={shoeData} />
            </Route>
            <Route path="buy">
                <Buy />
            </Route>
        </>
    );
}

export default Main;
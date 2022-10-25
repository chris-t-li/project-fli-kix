import DesignShoe from "./DesignShoe";
import Home from "./Home";
import Gallery from "./Gallery";
import Buy from "./Buy";
import { Route } from "react-router-dom";

function Main() {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/design">
                <DesignShoe />
            </Route>
            <Route path="/gallery">
                <Gallery />
            </Route>
            <Route path="buy">
                <Buy />
            </Route>
        </>
    );
}

export default Main;
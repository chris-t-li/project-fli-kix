import { useEffect, useState } from "react";
import ShoeCard from "./ShoeCard";

function Gallery() {
    const [allShoeData, setAllShoeData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3010/kix")
            .then(res => res.json())
            .then(data => setAllShoeData(data))
    }, [])

    return (
        <>
            {allShoeData.map(shoe => <ShoeCard key={shoe.id} shoe={shoe} />)}

        </>
    );
}

export default Gallery;
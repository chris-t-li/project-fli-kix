import React from "react"
import CheckoutForm from "./CheckoutForm";

function Buy({ shoeData, checkoutShoe, updateBoughtShoe }) {

    return (
        <div>
            <CheckoutForm
                shoeData={shoeData}
                checkoutShoe={checkoutShoe}
                updateBoughtShoe={updateBoughtShoe}
            />

        </div>
    )
}

export default Buy;
import React, { useState } from "react"
import CheckoutForm from "./CheckoutForm"
;

function Buy({shoeData, checkoutShoe, updateBoughtShoe}) {

    return (
        <div>
        <h3>Checkout Page</h3>
        <CheckoutForm 
        shoeData={shoeData} 
        checkoutShoe={checkoutShoe}
        updateBoughtShoe={updateBoughtShoe}
        />
       
        </div>
    )
}

export default Buy;
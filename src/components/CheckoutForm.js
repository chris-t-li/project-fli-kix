import React, { useState } from "react"
import { useHistory } from 'react-router-dom'

function CheckoutForm({ checkoutShoe, updateBoughtShoe }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    let history = useHistory();

    function handleCheckout(e) {
        console.log("bought")
        e.preventDefault()
        const checkoutData = {
            name: name,
            email: email,
            phone: phone,
        }

        fetch(`http://localhost:3010/kix/${checkoutShoe.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                isBought: true,
            })
        })
            .then((res) => res.json())
            .then(boughtShoe => {
                updateBoughtShoe(boughtShoe);

                history.push("/gallery")
            })
    }

    return (
        <div >
            <form onSubmit={handleCheckout} className="checkout-form">
                <fieldset>
                    <div className="checkout-form-container">
                        <input type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="checkout-form-container">
                        <input type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="checkout-form-container">
                        <input type="number" name="phone" placeholder="xxx-xxxx" onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="checkout-form-container">
                        <input type="submit" name="buy" value="CHECKOUT" />
                    </div>
                    <div id="checkout-shoe-main-image-container">
                        <img id="checkout-shoe-main-image" src={checkoutShoe.imageStr} />
                    </div>

                </fieldset>
            </form>
        </div>

    )
}

export default CheckoutForm
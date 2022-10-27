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
                type: name,
            })
        })
            .then((res) => res.json())
            .then(boughtShoe => {
                updateBoughtShoe(boughtShoe);

                history.push("/gallery")
            })
    }

    return (
        <div id="form-container">
            <div className="checkout-shoe-main-image-container">
                <img id="checkout-shoe-main-image" src={checkoutShoe.imageStr} />
            </div>
            <div className="checkout-shoe-main-image-container">
                <form onSubmit={handleCheckout}>
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
                        <div className="checkout-form-container" id="checkout-btn">
                            <input type="submit" name="buy" value="Checkout" />
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default CheckoutForm
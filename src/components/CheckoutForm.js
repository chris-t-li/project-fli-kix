import React, { useState } from "react"

function Checkout({shoe, onCheckOut}) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
​
    function handleCheckout(e) {
        e.preventDefault()
        const checkoutData = {
            name: name,
            email: email,
            phone: phone,
        }
​
        fetch(`http://localhost:3010/kix${shoe.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(checkoutData)
        })
            .then((res) => res.json())
            .then(newCheckout => onCheckOut(newCheckout))
​
    }
    
​
    return (
        <div className="checkout-form" onSubmit={handleCheckout}>
            <h2>Buy</h2>
            <form>
                <fieldset>
                <div>
                <input type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                <input type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                <input type="number" name="phone" placeholder="xxx-xxxx" onChange={(e) => setPhone(e.target.value)} />
                </div>
                </fieldset>
                <button type="submit">Buy Now</button>
            </form>
        </div>
​
    )
}
​
export default Checkout
import React, { useState } from "react"
import { Link, useHistory } from 'react-router-dom'

function CheckoutForm({checkoutShoe, updateBoughtShoe}) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    //const [isBought, setIsBought] = useState(true)

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
            //.then(newCheckout => onCheckOut(newCheckout))
    }
    

    return (
        <div className="checkout-form" >
            <h2>Buy</h2>
            <form onSubmit={handleCheckout}>
                <fieldset>
                    <div>
                        <img src={checkoutShoe.imageStr} />
                    </div>
                <div>
                <input type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                <input type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                <input type="number" name="phone" placeholder="xxx-xxxx" onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                {/* <Link to="/gallery">  */}
                    <input type="submit" name="buy" value="CHECKOUT"/>
                {/* </Link> */}
                </div>

                </fieldset>
                
                    {/* {isBought ? (
                    <button onClick={() => setIsBought(false)}>Buy</button>
                    ) :( 
                    <button onClick={() => setIsBought(true)}>Sold</button>
                    )} */}
                
                
            </form>
        </div>

    )
}

export default CheckoutForm
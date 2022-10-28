import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'

function CheckoutForm({ checkoutShoe, updateBoughtShoe }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [wallet, setWallet] = useState(1)
    const [addETH, setAddETH] = useState(0)

    let history = useHistory();

    const eth = "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg";

    useEffect(() => {
        fetch("http://localhost:3010/wallet")
            .then(res => res.json())
            .then(amt => setWallet(amt[0].amount))
    }, [])

    function updateEthereum(e, newWalletAmt) {
        e.preventDefault();
        fetch(`http://localhost:3010/wallet/1`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                "id": 1,
                "amount": newWalletAmt
            })
        })
            .then(res => res.json())
            .then(updatedWallet => {
                setWallet(updatedWallet.amount)
            })
    }

    function handleCheckout(e) {
        //console.log("bought")
        e.preventDefault()
        if (wallet < parseFloat(checkoutShoe.price)) {
            alert("You don't have enough ETH to make this purchase!!")
        } else {
            const checkoutData = {
                name: name,
                email: email,
                phone: phone,
                wallet: wallet
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
                    updateEthereum(e, wallet - parseFloat(boughtShoe.price));
                    history.push("/gallery");
                })
        }
    }

    const checkoutLabel = Object.keys(checkoutShoe).length === 0 ? null : `${checkoutShoe.type.toUpperCase()} Ξ ${checkoutShoe.price}`;

    return (
        <div id="form-container">
            <div className="checkout-shoe-main-image-container">
                <h3>{!!name ? name.toUpperCase() : null} </h3>
                <h3>{checkoutShoe === {} ? null : checkoutLabel}</h3>
                <img id="checkout-shoe-main-image" src={checkoutShoe.imageStr} />
            </div>

            <div className="checkout-shoe-main-image-container">
                <form onSubmit={(e) => updateEthereum(e, addETH + wallet)}>
                    <div className="checkout-form-container">
                        <h3>Wallet: {wallet.toFixed(4)} <img src={eth} alt="ETH Icon"></img></h3>
                    </div>
                    <div className="checkout-form-container">
                        <input type="number" step="0.001" min="0" name="AddETH" placeholder="Add ETH" onChange={(e) => setAddETH(parseFloat(e.target.value))} />
                    </div>
                    <div className="checkout-form-container" id="addETH-btn">
                        <input type="submit" name="addETH" value="Add to Wallet" />
                    </div>
                </form>
            </div>
            <div className="checkout-shoe-main-image-container">
                <form onSubmit={handleCheckout}>
                    <fieldset>

                        <div className="checkout-form-container">
                            <input required type="text" name="name" placeholder="Name Your NFK" onChange={(e) => setName(e.target.value)} />
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
import React, { useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import './Payment.css';
import { Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import Popup from "./components/Popup";
import { db } from "./firebase";

function Payment(){
    const [{basket, user}, dispatch]=useStateValue();
    const[error,setError] =useState(null);
    const [buttonPopup,setButtonPopup] = useState(false);
    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [pincode,setPincode] = useState("");
    const [landmark,setLandmark] = useState("");
    const [amount,setAmount] =useState(getBasketTotal(basket));
    const [email,setEmail] = useState(user.email);

    const handleCash = (e) => {
        e.preventDefault();
        if((name !== "") && (address !== "") && (pincode !== "") && (landmark !== "")){
        db.collection('orders').add({
            email:email,
            amount:amount,
            name:name,
            address:address,
            pincode:pincode,
            landmark:landmark,
        })
        .then(() => {
            alert('Order Successfullu Placed !!!');
        })

        setName("")
        setAddress("")
        setPincode("")
        setLandmark("")
    }else{
        alert("Please fillup all the fields");
    }
    };

    return (
        <div className="payment">
            <div className="payment__container">
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items:</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                            id={(item.id)}
                            title={(item.title)}
                            price={(item.price)}
                            rating={(item.rating)}
                          />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3> Payment: </h3>
                    </div>
                    <div className="payment__details">
                        <form>                           
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                readerText = {(value) => (
                                    <h1>Order Total:{value}</h1>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"Rs."}
                                />
                                <br /><br/>
                                <Link>
                                    <button className="pay" onClick={() => setButtonPopup(true)}>Pay</button>
                                </Link>
                                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                    <h3>Cash On Delivery</h3>
                                    <form>
                                        <label>Amount:</label>
                                        <input type='text' placeholder={getBasketTotal(basket)} readOnly></input><br /><br />
                                        <label>E-mail</label>
                                        <input placeholder={user.email} readOnly></input><br /><br />
                                        <label>Full Name: </label>
                                        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} type='text'></input><br /><br />
                                        <label>Address: </label>
                                        <input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} type='text'></input><br /><br />
                                        <label>Pincode</label>
                                        <input placeholder="Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} type='text'></input><br /><br />
                                        <label>Land Mark</label>
                                        <input placeholder="Landmark" value={landmark} onChange={(e) => setLandmark(e.target.value)} type='text'></input><br /><br />
                                        <button className="pay" onClick={handleCash} type="submit">Submit</button>
                                    </form>
                                </Popup>   
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Payment;
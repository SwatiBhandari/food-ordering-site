import React from "react";
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
    const history=useHistory();
    const[{basket},dispatch] = useStateValue();
    console.log(basket);
    const subTotal = basket.reduce((amount, item) => {return item.price + amount}, 0);
    console.log(subTotal);
    return (
     <div className="Subtotal">
            <CurrencyFormat
               renderText={(value) => (
                <>
                  <p>
                    Subtotal ({basket.length} items): 
                    <strong> {value}</strong>
                  </p>
                </>
               )}
               decimalScale={2}
               value={subTotal}
               displayType={'text'}
               thousandSeparator={true}
               prefix={"Rs."}
            />
            <button className="button1" onClick={e => history.push('/payment')}> Proceed to payment </button>

        </div>
    );
}

export default Subtotal;
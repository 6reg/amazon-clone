import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';

function Subtotal() {
    // pull basket from useStateValue
    const [{ basket }, dispatch] = useStateValue();

    // calculate basket total
    const calculateTotal = (basket) => {
        return basket.reduce((price, item) => item.price + price, 0)
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) => (
                <>
                <p>
                    Subtotal ({basket?.length} items):{" "}
                    <strong>${calculateTotal(basket)}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
        </div>      
    )
}

export default Subtotal

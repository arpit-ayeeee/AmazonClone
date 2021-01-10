import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => {  //renderText is what getting rendered on the screen
                    return(
                        <div>
                            <p>
                                Subtotal (0 items): <strong>0</strong> 
                            </p>
                            <small className="subtotal_gift">
                                <input type="checkbox"/>This order contains a gift
                            </small>
                        </div>
                    )
                }}
                decimalScale={2} /**So that value will be till two decimal places */
                value={0}          
                displayType={"text"} /** This will be used as the thousand seperator, if values are in thousands */
                thousandSeperator={true}  prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal

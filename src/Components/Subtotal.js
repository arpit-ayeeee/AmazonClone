import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import {getBasketTotal} from '../Reducer';
import './Subtotal.css';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const [{basket}] = useStateValue();
    
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => {  //renderText is what getting rendered on the screen
                    return(
                        <div>
                            <p>
                                Subtotal ({basket.length} items): <strong>{value}</strong> 
                            </p>
                            <small className="subtotal_gift">
                                <input type="checkbox"/>This order contains a gift
                            </small>
                        </div>
                    )
                }}
                decimalScale={2} /**So that value will be till two decimal places */
                value={getBasketTotal(basket)}          
                displayType={"text"} /** This will be used as the thousand seperator, if values are in thousands */
                thousandSeperator={true}  prefix={"$"}
            />
            <button onClick={e => history.push('/payments')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal

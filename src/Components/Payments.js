import React, {useEffect, useState} from 'react';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import {Link, useHistory} from 'react-router-dom';
import './Payments.css';
import { CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../Reducer';
import axios from 'axios';


function Payments() {
    const [{user, basket}, dispatch] = useStateValue();
    const history = useHistory();


    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState("");


    const handleSubmit = async(event) => {
        event.preventDefault(); //Prevent refreshing
        // dispatch({
        //     type: "EMPTY_BASKET"
        // })
        history.replace('/orders') 

    }
    const handleChange = event => {
        //Here we'll listen for changes in the CardElement
        //And display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    }
    return (
        <div className="payments"> 
            <div className="payments_container">
                <h1>Checkout (<Link to="/checkout">{basket? basket.length : null} items</Link>)</h1>
                <div className="payments_section">{/**Delivery address */}
                    <div className="payments_title"><h3>Delivery address</h3></div>
                    <div className="payments_address">
                        <p>{user? user.email : ""}</p>
                        <p>123 React Chowk</p>
                        <p>LA, New Punjab</p>
                    </div>
                </div>
                <div className="payments_section">{/**Review items */}
                    <div className="payments_title"><h3>Review items and delivery</h3></div>
                    <div className="payments_items">            {/**We'll reuse the checkout product component here */}
                        {               
                            basket.map(item => (
                                <CheckoutProduct 
                                    id={item.id} 
                                    title={item.title} 
                                    image={item.image} 
                                    price={item.price} 
                                    rating={item.rating}/>
                            ))
                        }
                    </div>
                </div>
                <div className="payments_section">{/**Payment method */}
                    <div className="payments_title"><h3>Payment Method</h3></div>
                    <div className="payments_details">
                        <form onSubmit={handleSubmit}>
                            {/**We used this element from react-stripe-js module */}
                            {/**handleChange will take over once we enter the value in card */}
                            <CardElement onChange={handleChange}/>   
                            <div className="payments_priceContainer">
                                <CurrencyFormat 
                                        renderText={(value) => (<div><h3>Order Total : {value}</h3></div>)}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)} //Allows us to get the value
                                        displayType={"text"} thousandSeparator={true} prefix={"$"} />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p>: "Buy Now"}</span>
                                </button>
                            </div>
                            {/**Error */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payments

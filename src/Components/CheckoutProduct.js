import React from 'react';
import { useStateValue } from '../StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({id, image, title, price, rating}) {
    const [state, dispatch] = useStateValue();

    const removeFromBasket = () => { 
        dispatch({                      //This method will fire, when we click the remove button
            type: "REMOVE_FROM_BASKET", //In which we'll dispatch the type and action which will contain the payload
            id: id
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="ProductImage" className="checkoutProductImage"/>
            <div className="checkoutProductInfo">
                <p className="checkoutProductTitle">{title}</p>
                <p className="checkoutProductPrice">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="checkoutProductRating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </p>
                <button className="checkoutProductButton" onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;

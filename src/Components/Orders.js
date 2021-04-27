import React from 'react';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import './Order.css';

function Orders() {
    const [{orderedProd}] = useStateValue();
    console.log(orderedProd);
    return (
        <div className="orderContainer">
            <h1 className="orderTitle"> Your orders ({orderedProd.length}) </h1>
            <div className="orderList">
            {
                orderedProd.map(prod=>(
                    <div>
                        <div className="checkoutProduct">
                            <img src={prod.image} alt="ProductImage" className="checkoutProductImage"/>
                            <div className="checkoutProductInfo">
                                <p className="checkoutProductTitle">{prod.title}</p>
                                <p className="checkoutProductPrice">
                                    <small>$</small>
                                    <strong>{prod.price}</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Orders

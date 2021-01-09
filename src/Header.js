//Using this ES7 extension, we can get a structure of a functional component by typing rfce
import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import  ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            <img className="header_logo" src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png" alt="logo"/>
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLine1">Hello user</span>
                    <span className="header_optionLine2">SignIn</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLine1">Return</span>
                    <span className="header_optionLine2">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLine1">Your</span>
                    <span className="header_optionLine2">Prime</span>
                </div>
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header_optionLine2 header_optionBasket header_basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header

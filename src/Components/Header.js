//Using this ES7 extension, we can get a structure of a functional component by typing rfce
import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from '../StateProvider';
import { auth } from '../firebase';

function Header() {
    const[{basket, user}, dispatch] = useStateValue();
    const handleAuth = () => {          //This is how user will signout, if user is available, so obv the signout button will be there and the user will signout
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/"><img className="header_logo" src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png" alt="logo"/></Link>
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <Link to={!user && '/login'}> {/**Says if there is no user, then it'll be sent to login page, else for signout we'll be at home page only */}
                    <div onClick={handleAuth} className="header_option">
                        <span className="header_optionLine1">Hello {user? `${user.email}` : "Guest"}</span>
                        <span className="header_optionLine2">{user? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionLine1">Return</span>
                    <span className="header_optionLine2">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLine1">Your</span>
                    <span className="header_optionLine2">Prime</span>
                </div>
                <Link to="/checkout" >
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLine2 header_optionBasket header_basketCount">{ basket.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header

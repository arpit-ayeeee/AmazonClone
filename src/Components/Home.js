import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner"/>
                <div className="home_row">
                    <Product id="123456" title="The Lean Startup: How Constant Innovation Creates Radically Successsfull Paperback" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={3}/>
                    <Product id="49538094" title="Kenwood Mixer & Grinder: Stylish Kitchen Mixer with K-Beater" price={239.99} image="https://i.pinimg.com/236x/40/70/37/40703757d67e90e070d046362c7b0da5.jpg" rating={5}/>
                </div>
                <div className="home_row">
                    <Product id="1730712" title="Smart Watch" price={199.99} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" rating={2}/>
                    <Product id="1624832" title="Amazon Echo | Smart speaker with Alexa" price={29.99} image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" rating={4}/>
                    <Product id="21461864" title="New Apple iPad Pro" price={599.99} image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" rating={5}/>
                </div>
                <div className="home_row">
                    <Product id="1247112" id="" title="Samsung LCDBCIW8GI8G 49' Curved LED Monitor" price={9.99} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" rating={3}/>
                </div>
            </div>
        </div>
    )
}

export default Home


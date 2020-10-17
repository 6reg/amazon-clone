import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                    />
                    <div className="home__row">
                        <Product 
                            id="12321341"
                            title="I love how flexbox justifies my elements across the page"
                            price={29.99}
                            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                            rating={5} 
                        />
                        <Product
                            id="49538094"
                            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer"
                            price={239.0}
                            rating={3}
                            image="https://images-na.ssl-images-amazon.com/images/I/41lJxQ0jVuL._AC_SX450_.jpg"
                        />
                    </div>

                    <div className="home__row">
                        <Product
                            id="4983850"
                            title="A Very Intelligent Watch - Black, Digital"
                            price={199.99}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />
                        <Product
                            id="23445930"
                            title="Amazon Echo (3rd gen) | Smart Speaker with Alexa"
                            price={39.99}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/61KIcV26CdL._AC_SL1000_.jpg" />
                        <Product
                            id="3254354345"
                            title="Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Gen)"
                            price="cha ching"
                            rating={3}
                            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" />
                    </div>
                    <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung Monitor 49' Curved Ultra Wide"
                        price={999.99}
                        rating={2}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._ac_sx355_.jpg" />
                    </div>            
        </div></div>
    );
}

export default Home 
import React from "react";
import './Shree_Ram.css'
import Product from "./Product";

function Shree_Ram() {

    return(
        <div className="home">
        <div className="home__container">
            
                        <div className="item__row">
                        <Product 
                        id='9'
                        title='Panipuri'
                        price={25.00}
                        rating={5} 
                        />
                        <Product
                        id='10'
                        title='Shev Puri'
                        price={30.00}
                        rating={4} 
                        />
                        <Product
                        id='11'
                        title='Sukha Puri'
                        price={20.00}
                        rating={5} 
                        />
                        

                        </div>

                        <div className="item__row">
                            <Product
                            id='12'
                            title='Bhel Puri'
                            price={25.00}
                            rating={4}
                            />
                            <Product
                            id='13'
                            title='Sukha Bhel'
                            price={30.00}
                            rating={2}
                            />
                            <Product
                            id='14'
                            title='Geela Bhel'
                            price={30.00}
                            rating={4}
                            />
                        </div>

                        <div className="item__row">
                            <Product
                            id='15'
                            title='Dahi Puri'
                            price={30.00}
                            rating={5}
                            />
                            <Product
                            id='16'
                            title='Ragda Puri'
                            price={25.00}
                            rating={4}
                            />
                        </div>
            
            

        </div>

    </div>
                
)}


export default Shree_Ram;
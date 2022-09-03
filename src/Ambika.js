import React from "react";
import './Ambika.css'
import Product from "./Product";

function Ambika() {

    return(
        <div className="home">
        <div className="home__container">
            
                        <div className="item__row">
                        <Product 
                        id='1'
                        title='Panipuri'
                        price={20.00}
                        rating={4} 
                        />
                        <Product
                        id='2'
                        title='Shev Puri'
                        price={30.00}
                        rating={4} 
                        />
                        <Product
                        id='3'
                        title='Dahi Puri'
                        price={35.00}
                        rating={3} 
                        />
                        

                        </div>

                        <div className="item__row">
                            <Product
                            id='4'
                            title='Sukha Bhel'
                            price={25.00}
                            rating={2}
                            />
                            <Product
                            id='5'
                            title='Geela Bhel'
                            price={25.00}
                            rating={3}
                            />
                            <Product
                            id='6'
                            title='Aaloo Chaat'
                            price={30.00}
                            rating={5}
                            />
                        </div>

                        <div className="item__row">
                            <Product
                            id='7'
                            title='Samosa Chaat'
                            price={30.00}
                            rating={4}
                            />
                            <Product
                            id='8'
                            title='Sukha Puri'
                            price={20.00}
                            rating={4}
                            />
                        </div>
            
            

        </div>

    </div>
                
)}


export default Ambika;
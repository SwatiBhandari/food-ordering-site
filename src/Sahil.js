import React from 'react'
import Product from './Product';
import './Sahil.css';

function Sahil() {
  return (
    <div className="home">
        <div className="home__container">
            
                        <div className="item__row">
                        <Product 
                        id='41'
                        title='Masala Cheese Grilled Sandwitch'
                        price={30.00}
                        rating={3} 
                        />
                        <Product
                        id='42'
                        title='Samosa Grilled Sandwitch'
                        price={35.00}
                        rating={5} 
                        />
                        <Product
                        id='43'
                        title='Corn Cheese Grilled Sandwitch'
                        price={35.00}
                        rating={4} 
                        />
                        

                        </div>

                        <div className="item__row">
                            <Product
                            id='44'
                            title='Mashroom Pizza'
                            price={60.00}
                            rating={4}
                            />
                            <Product
                            id='45'
                            title='Paneer Pizza'
                            price={60.00}
                            rating={4}
                            />
                            <Product
                            id='46'
                            title='Chocolate Sandwitch'
                            price={40.00}
                            rating={4}
                            />
                        </div>

                        <div className="item__row">
                            <Product
                            id='47'
                            title='Veg Cheese Pizza'
                            price={60.00}
                            rating={4}
                            />
                            <Product
                            id='48'
                            title='Jam Grilled Sandwitch'
                            price={30.00}
                            rating={3}
                            />
                        </div>
            
            

        </div>

    </div>
  )
}

export default Sahil

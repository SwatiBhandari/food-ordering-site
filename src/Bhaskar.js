import React from 'react'
import Product from './Product';
import './Bhaskar.css';

function Bhaskar() {
  return (
    <div className="home">
        <div className="home__container">
            
                        <div className="item__row">
                        <Product 
                        id='25'
                        title='Single Idli'
                        price={20.00}
                        rating={4} 
                        />
                        <Product
                        id='26'
                        title='Single Vada'
                        price={25.00}
                        rating={3} 
                        />
                        <Product
                        id='27'
                        title='Benne Dosa'
                        price={35.00}
                        rating={4} 
                        />
                        

                        </div>

                        <div className="item__row">
                            <Product
                            id='28'
                            title='Masala Dosa'
                            price={40.00}
                            rating={4}
                            />
                            <Product
                            id='29'
                            title='Uppit'
                            price={25.00}
                            rating={3}
                            />
                            <Product
                            id='30'
                            title='Sheera'
                            price={20.00}
                            rating={3}
                            />
                        </div>

                        <div className="item__row">
                            <Product
                            id='31'
                            title='Batata Vada'
                            price={20.00}
                            rating={4}
                            />
                            <Product
                            id='32'
                            title='Kanda Bhaji'
                            price={25.00}
                            rating={5}
                            />
                        </div>
            
            

        </div>

    </div>
  )
}

export default Bhaskar

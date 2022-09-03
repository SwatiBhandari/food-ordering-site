import React from 'react'
import Product from './Product';
import './Swsti.css'

function Swsti() {
  return (
    <div className="home">
        <div className="home__container">
            
                        <div className="item__row">
                        <Product 
                        id='33'
                        title='Butter Corn'
                        price={25.00}
                        rating={4} 
                        />
                        <Product
                        id='34'
                        title='Tandoori Corn'
                        price={30.00}
                        rating={5} 
                        />
                        <Product
                        id='35'
                        title='Masala Corn'
                        price={35.00}
                        rating={3} 
                        />
                        

                        </div>

                        <div className="item__row">
                            <Product
                            id='36'
                            title='Pepper Lemon Corn'
                            price={30.00}
                            rating={2}
                            />
                            <Product
                            id='37'
                            title='Chilly Lemon Corn'
                            price={30.00}
                            rating={4}
                            />
                            <Product
                            id='38'
                            title='Chinese Corn'
                            price={35.00}
                            rating={3}
                            />
                        </div>

                        <div className="item__row">
                            <Product
                            id='7'
                            title='BBQ Lemon'
                            price={30.00}
                            rating={4}
                            />
                            <Product
                            id='8'
                            title='Cheese Corn'
                            price={40.00}
                            rating={3}
                            />
                        </div>
            
            

        </div>

    </div>
  )
}

export default Swsti;

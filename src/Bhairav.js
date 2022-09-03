import React from 'react'
import Product from './Product';
import './Bhairav.css'

function Bhairav() {
  return (
    <div className="home">
        <div className="home__container">
            
                        <div className="item__row">
                        <Product 
                        id='17'
                        title='Falooda(Gulkand)'
                        price={45.00}
                        rating={5} 
                        />
                        <Product
                        id='18'
                        title='Falooda(Mango)'
                        price={50.00}
                        rating={4} 
                        />
                        <Product
                        id='19'
                        title='Kulfi(Malai)'
                        price={35.00}
                        rating={5} 
                        />
                        

                        </div>

                        <div className="item__row">
                            <Product
                            id='20'
                            title='Kulfi(American DryFruits)'
                            price={35.00}
                            rating={5}
                            />
                            <Product
                            id='21'
                            title='Strawberry Icecream'
                            price={25.00}
                            rating={3}
                            />
                            <Product
                            id='22'
                            title='Pista Icecream'
                            price={25.00}
                            rating={3}
                            />
                        </div>

                        <div className="item__row">
                            <Product
                            id='23'
                            title='Badam Shake'
                            price={50.00}
                            rating={5}
                            />
                            <Product
                            id='24'
                            title='ColdCoco'
                            price={40.00}
                            rating={3}
                            />
                        </div>
            
            

        </div>

    </div>
  )
}

export default Bhairav

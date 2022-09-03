import React from 'react'
import Product from './Product'
import './Govind.css'

function Govind() {
  return (
    <div className="home">
        <div className="home__container">
            
                        <div className="item__row">
                        <Product 
                        id='49'
                        title='Classic Vada Pav'
                        price={20.00}
                        image=''
                        rating={4} 
                        />
                        <Product
                        id='50'
                        title='Cheese Vada Pav'
                        price={30.00}
                        image=''
                        rating={3} 
                        />
                        <Product
                        id='51'
                        title='Tandoori Vada Pav'
                        price={25.00}
                        image=''
                        rating={4} 
                        />
                        

                        </div>

                        <div className="item__row">
                            <Product
                            id='52'
                            title='Shezwaan Vada Pav'
                            price={30.0}
                            rating={3}
                            />
                            <Product
                            id='53'
                            title='Tikka Masala Vada Pav'
                            price={30.00}
                            rating={4}
                            />
                            <Product
                            id='54'
                            title='PeriPeri Vada Pav'
                            price={30.00}
                            rating={4}
                            />
                        </div>

                        <div className="item__row">
                            <Product
                            id='55'
                            title='Chilly Vada Pav'
                            price={35.00}
                            rating={3}
                            />
                            <Product
                            id='56'
                            title='Crispy Vada Pav'
                            price={35.00}
                            rating={3}
                            />
                        </div>
            
            

        </div>

    </div>
  )
}

export default Govind

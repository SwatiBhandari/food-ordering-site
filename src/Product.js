import React from "react";
import './Product.css';
import { useStateValue } from "./StateProvider";

function Product({ id,title,image,price,rating }) {
    const [{basket}, dispatch] =useStateValue();

    console.log('this is the basket >>>',basket);

    const addToBasket=() => {
        //dispatch the item into the data layer
        dispatch({
            type:"ADD_TO_BASKET",
            item: {
                id: id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },

        })

    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>rs.</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i) => (<p><span role="img" aria-label="emoji">⭐</span></p>))}
                </div>
                <div >
                    <img className="image" src={image} alt="" />
                    <div>
                    <button align="center" className="button" onClick={addToBasket}> ADD </button>
                    </div>
                </div>
            </div>

        </div>    
        )
}

export default Product;
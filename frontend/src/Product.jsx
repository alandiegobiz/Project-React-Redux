import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import './assets/styles/Product/styles.css'

const Product = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    console.log(products);

    return (
        <div className="panelStyle">
            <h2>PERIFÉRICOS GAMERS</h2>

            <div className="divStyle">
                {products.map(item => (
                    <div key={item.id} className="cardStyle">
                        <p>{item.name}</p>
                        <p>R${item.price.toFixed(2)}</p>
                        <button
                        onClick={() => dispatch({type: "ADD_TO_CART", id: item.id})}
                        
                        >Add to cart</button>
                    </div>
            
                ))}
            </div>

        </div>
    )
}

export default Product;

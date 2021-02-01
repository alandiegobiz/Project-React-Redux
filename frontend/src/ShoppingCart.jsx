import React from 'react'
import './assets/styles/ShoppingCart/styles.css'
import { useSelector, useDispatch } from 'react-redux';

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.filter(item => {

        return item.qty > 0
    }));
    
    const totalQty = useSelector((state) => state.cart.reduce((acc, cur) => acc + cur.qty, 0))

    const totalPrice = useSelector((state) => state.cart.reduce((acc, cur) => acc + cur.price * cur.qty, 0));

    return (
        <div className="panelStyle2">
            <h2>CARRINHO ({totalQty})</h2>
            <table>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td style={{ width: '270px' }}>{item.name}</td>
                            <td className="tdprice">R${item.price.toFixed(2) * item.qty}</td>
                            <td>
                                
                                <button onClick={() => dispatch({type: "REMOVE_FROM_CART", id: item.id})}>-</button>  
                                {item.qty}
                                <button onClick={() => dispatch({type: "ADD_TO_CART", id: item.id})}>+</button>

                            </td>
                        </tr>
                    ))}
                </tbody>


            </table>
            <h3>Custo Total: R$ {totalPrice}</h3>

        </div>
    )
}

export default ShoppingCart;

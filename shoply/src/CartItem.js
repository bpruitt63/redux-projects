import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

function CartItem({cart, prod}) {

    const dispatch = useDispatch();
    const products = useSelector(store => store.inventory);
    const product = products.find(p => p.id === prod.id);

    const add = () => {
        let value = cart[product.id] || 0;
        value ++;
        dispatch({type: "CHANGE", product: product.id, value: value});
    };

    const remove = () => {
        let value = cart[product.id];
        value > 0 ? value -- : value = 0
        dispatch({type: "CHANGE", product: product.id, value: value});
    };

    return (
        <div>
            <p>{product.name}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {prod.quantity}</p>
            <button onClick={add}>+</button>
            <button onClick={remove}>-</button>
        </div>
    )
};

export default CartItem;
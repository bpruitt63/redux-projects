import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams, Link} from 'react-router-dom';
import MiniCart from './MiniCart';

function ProductDetail() {

    const {id} = useParams();
    const dispatch = useDispatch();
    const products = useSelector(store => store.inventory)
    const product = products.find(p => p.id === id);
    const cart = useSelector(store => store.cart);

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
        <div className='ProductDetail'>
            <Link to='/'>Product List</Link>
            <MiniCart />
            <img src={product.image_url} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={add}>+</button>
            <button onClick={remove}>-</button>
        </div>
    )
};

export default ProductDetail;
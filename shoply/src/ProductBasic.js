import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

function ProductBasic({product}) {

    const dispatch = useDispatch();
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
        <div className='ProductBasic'>
            <img src={product.image_url} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={add}>+</button>
            <button onClick={remove}>-</button>
            <Link to={`/products/${product.id}`} className='ProductLink'>
                View Item Details
            </Link>
        </div>
    )
};

export default ProductBasic;
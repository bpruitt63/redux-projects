import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

function MiniCart() {

    const cart = useSelector(store => store.cart);
    const values = Object.values(cart);
    const count = values.reduce((a, b) => a + b, 0);

    return (
        <div>
            <Link to='/cart'>Cart: {count}</Link>
        </div>
    )
};

export default MiniCart;
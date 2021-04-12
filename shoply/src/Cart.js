import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import CartItem from './CartItem';

function Cart() {

    const products = useSelector(store => store.inventory);
    const [total, setTotal] = useState(0);
    const cart = useSelector(store => store.cart);
    const list = Object.entries(cart).map(prod => (
        {id: prod[0], quantity: prod[1]}
    ));
    

    useEffect(() => {
        const totalCost = () => {
            let tot = 0;
            for (let item of list) {
                const product = products.find(p => p.id === item.id);
                const sumPrice = (product.price * item.quantity) + tot;
                tot = sumPrice;
                console.log(sumPrice)
            };
            setTotal(tot);
        };
        totalCost();
    }, [products, list]); 

    return(
        <div>
            {list.map(p => <CartItem 
                                    cart={cart} 
                                    prod={p} 
                                    key={p.id} />)}
            <p>Total Cost: ${total}</p>
        </div>
    )
};

export default Cart;
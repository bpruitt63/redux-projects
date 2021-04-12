import React from 'react';
import ProductBasic from './ProductBasic';
import {useSelector} from 'react-redux';
import MiniCart from './MiniCart';

function ProductList() {

    const products = useSelector(store => store.inventory);
    
    return (
        <div>
            <MiniCart />
            {products.map(product => <ProductBasic 
                                        product={product} 
                                        key={product.id} />)}
        </div>
    )
};

export default ProductList;
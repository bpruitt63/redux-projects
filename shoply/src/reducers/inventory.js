import products from '../data.json';

const INITIAL_STATE = Object.entries(products.products).map(product => (
    {id: product[0], name: product[1].name, price: product[1].price,
        description: product[1].description, image_url: product[1].image_url}
));

export default function inventory(state=INITIAL_STATE, action) {
    switch (action.type){

        default:
            return state;
    };
};
import React from 'react';
import Products from './Products';

const Store = () => {
    //const ProductList = ["apple iphone 18","sumsung s26 ultra","motorolla razr flex","google pixel 11 pro"];
    //const ProductList = null;
    const ProductList = [
        {
            id : 1,
            name : "apple iphone 18",
            price : 120000000
        },
        {
            id : 2,
            name : "sumsung s26 ultra",
            price : 30000000
        },
        {
            id : 3,
            name : "motorolla razr flex",
            price : 170000000
        },
        {
            id : 4,
            name : "google pixel 11 pro",
            price : 8000000
        }
    ];
    return (
        <div>
            <Products myproducts={ProductList} />
        </div>
    );
};

export default Store;
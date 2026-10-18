import React from 'react';

/*
const Product = (props) => {
    // console.log(props);
    const { price,color } = props; // object distructing
    return (       
        <div>
            <h1>Hello Product</h1>
            <h4>price: {price}</h4>
            <h4>color: {color}</h4>
        </div>
    );
};

*/

const Product = ({ price,color }) => {
    // console.log(props);
    return (       
        <div>
            <h1>Hello Product</h1>
            <h4>price: {price}</h4>
            <h4>color: {color}</h4>
        </div>
    );
};

export default Product;
import React from 'react';

const Products = (probs) => {
    
    const product_list = probs.myproducts;

    return (
        <div>
            <h1>تعداد محصولات {product_list && product_list.length} عدد می باشد</h1>
            <h1>تعداد محصولات {product_list ? product_list.length : 0} عدد می باشد</h1>
            <hr />
            
            {/* <ul>
                {product_list && 
                    product_list.map((product, index) => {
                    return <li key={index}>{product}</li>;
                })}
            </ul> */}

            <ul>
                {product_list && 
                    product_list.map((product) => {
                    return <li key={product.id}>{product.name} - {product.price}</li>;
                })}
            </ul>

            
        </div>
    );
};

export default Products;
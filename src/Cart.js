// import "./App.css";
// import styles from './mystyle.module.css';

// const Cart = () => {
//     const stylesd = {color: "white", backgroundColor: "green"};
//     return(
//         <div>
//             <h2 style={{color: "red", backgroundColor: "black"}} >Hello Cart Module</h2>
//             <h2 style={stylesd} >Hello Cart </h2>
//             <h1>Hello Cart </h1>
//             <h3 className={styles.biblue}>Hello Cart Style Module </h3>
//         </div>
//     );
// }

// export default Cart;


import React from 'react';
import { MyButton } from './ui/MyButton';
//import styled from 'styled-components';

const Cart = () => {
    /* const MyButton = styled.button
    `color : red;
     background-color: #b3e;
    ` */
    return (
        <div>
            {/* <MyButton>Mohsen Zamani</MyButton> */}
            <MyButton>Mohsen Zamani</MyButton>
        </div>
    );
};

export default Cart;
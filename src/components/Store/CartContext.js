import React from "react";

const CartContext = React.createContext({
    items:[],
    totalAmount:0,
    addItem:()=>{},
    removeItem:()=>{},
    clearCart: () => {},
    setItems: () => {}, // Add setItems method
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
});

export default CartContext;

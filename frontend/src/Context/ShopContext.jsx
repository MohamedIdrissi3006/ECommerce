import React, { createContext, useState,useEffect } from "react";
import all_product from '../Components/Assets/all_product'
export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {}
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
  

    // const updateCart = (newCart) => {
    //     setCartItems(newCart);
    //     localStorage.setItem("cart", newCart);
    //     localStorage.setItem("cartTimestamp", new Date().getTime());
    // };

    // const addToCart = (itemId) => {
    //     updateCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // }

    // const removeFromCart = (itemId) => {
    //     updateCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    // }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalAmount = ()=>{
        let totalAmount = 0;

        for(const item in cartItems){
            console.log(item)
           console.log(cartItems[item]>0)
if(cartItems[item]>0)
           { 
           
            let itemInfo = all_product.find((product)=>product.id === Number(item))
            console.log(itemInfo)
            totalAmount +=  cartItems[item] * itemInfo.new_price; 
            console.log(totalAmount)
               return totalAmount;
        }
    
   
        }
    }
    const contextValue = { all_product, cartItems, addToCart, removeFromCart,getTotalAmount }
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
import React, { createContext, useState, useEffect } from "react";
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


  

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalAmount = () => {
        let totalAmount = 0;

        for (const item in cartItems) {
            console.log(item)
            console.log(cartItems[item] > 0)
            if (cartItems[item] > 0) {

                let itemInfo = all_product.find((product) => product.id === Number(item))
                console.log(itemInfo)
                totalAmount += cartItems[item] * itemInfo.new_price;
                console.log(totalAmount)
              
            }
        }
        return totalAmount;
    }

    const getTotatCartItems = () =>{
        let totalItems = 0; 
        
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }
    const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalAmount , getTotatCartItems}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
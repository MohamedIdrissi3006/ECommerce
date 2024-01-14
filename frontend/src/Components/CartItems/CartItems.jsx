import React from 'react'
import './CartItems.css'
import { useContext,useEffect } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
    const {all_product, cartItems, addToCart, removeFromCart , getTotalAmount } = useContext(ShopContext)

    
    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>

                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>{e.new_price * cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                    </div>
                }
                return null;
            })
            }
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>
                                SubTotal
                            </p>
                            <p>
                                ${getTotalAmount()}
                            </p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>
                                Shipping Fee
                            </p>
                            <p>
                              Free
                            </p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>
                                Total
                            </p>
                            <p>
                                ${getTotalAmount()}
                            </p>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className='cartitems-promos'>
                    <p>if you have a promo code , Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code'/>
                    <button>submit</button>
                    </div>
                </div>
            </div>
            {/* <div className="cartitems-format">
                <img src="" alt="" className='carticon-product-icon' />
                <p></p>
                <p></p>
                <button className='cartitems-quantity'></button>
                <p></p>
                <img src={remove_icon} onClick={() => { removeFromCart() }} alt="" />
            </div> */}
            <hr />

        </div>
    )
}

export default CartItems
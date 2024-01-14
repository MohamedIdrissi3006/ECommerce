import React, { useContext } from 'react'
import './ProductDiplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDiplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext)
    return (
        <div className='productdiplay'>
            <div className="productdiplay-left">
                <div className="productdiplay-img-liste">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdiplay-img">
                    <img className='productdiplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdiplay-right">
                <h1>{product.name}</h1>
                <div className="productdiplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdiplay-right-prices">
                    <div className="productdiplay-right-price-old">${product.old_price} </div>
                    <div className="productdiplay-right-price-new">${product.new_price}  </div>
                </div>
                <div className="productdiplay-right-description">
                    Elevate your style with our timeless Classic Denim Jacket,
                    crafted for the modern fashion enthusiast. Made from premium,
                    durable denim, this jacket seamlessly blends comfort and
                    trend-setting design. Whether you're heading out for a casual
                    day or a night on the town,
                    this versatile piece effortlessly complements any ensemble.
                </div>
                <div className="productdiplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdiplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
                <p className="productdiplay-right-category">
                    <span>
                        Category :
                    </span>
                    Women, T-shirts, Corc Top
                </p>
                <p className="productdiplay-right-category">
                    <span>
                        Tags : 
                    </span>
                    Modern, Latest, Women, T-shirts, Corc Top
                </p>
            </div>
        </div>
    )
}

export default ProductDiplay
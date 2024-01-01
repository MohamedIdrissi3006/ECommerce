import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import {ShopContext} from '../Context/ShopContext'
const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext)
  return (
    <div className='shop-category'>

<img src={props.banner} alt="" />
<div className="shopcategroy_indexSort">
<p>
  <span>Showing 1-12</span> out of 36 Product
</p>


</div>
    </div>
  )
}

export default ShopCategory
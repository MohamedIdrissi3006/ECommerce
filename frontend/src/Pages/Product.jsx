import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import {useParams} from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDiplay from '../Components/ProductDiplay/ProductDiplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct'
const Product = () => {

  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  // Check if all_product is defined and is an array
  const product = all_product.find((e) => e.id === Number(productId))
  
  
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDiplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
}

export default Product
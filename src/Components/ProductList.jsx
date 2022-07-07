import React from 'react'
import { useAllProducts } from '../Context/AllProductContext'
import ProductListCard from './Cards/ProductListCard'

const ProductList = () => {

  const allProducts = useAllProducts();
  console.log(allProducts);

  return (
    <div className="ProductListBody">
      <div className='ProductListContainer'>

        {
          allProducts.map((item, i) => (
            <ProductListCard key={i} />
          ))
        }


      </div>
    </div>
  )
}

export default ProductList
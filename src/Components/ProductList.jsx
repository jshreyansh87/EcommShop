import React from 'react'
import { useAllProducts } from '../Context/AllProductContext'
import ProductListCard from './Cards/ProductListCard'

const ProductList = () => {

  const allProducts = useAllProducts();

  return (
    <div className="ProductListBody">
      <div className='ProductListContainer'>

        {
          allProducts.map((item, i) => (
            <ProductListCard key={i} id={item.id} title={item.productName} brand={item.productBrand} currentPrice={item.currentPrice} prevPrice={item.prevPrice} offer={item.offer} imageUrl={item.images[0]} />
          ))
        }

      </div>
    </div>
  )
}

export default ProductList
import React, { createContext, useContext } from 'react'

const AllProductContext = createContext();

export function useAllProducts() {
    return useContext(AllProductContext)
}

export function AllProductProvider({ children }) {

    const productData = [
        {
            id: "1",
            productName: "Running Shoes For Men (Black)",
            productBrand: "hotstyle",
            category: "sports",
            itemType: "shoes",
            currentPrice: "₹247",
            prevPrice: "₹499",
            offer: "50%",
            productDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam sapiente tempora excepturi minus alias praesentium quam, iste mollitia! Mollitia minima optio ad libero molestias voluptatem ducimus vero! Consequuntur veniam facilis perspiciatis? Itaque, qui?",
            specs: {"Color":"Black", "Outer Material":"Canvas", "Ideal for":"Sports", "Sole Material":"PVC", "Closure":"Lace-Ups", "Upper Pattern":"Woven Design", "Pack of":"1"},
            images: ["https://m.media-amazon.com/images/I/81i057rz8gS._UL1500_.jpg", "https://cdn.fashiola.in/L84863407/afrojack-men-black-printed-sneakers.jpg", "https://img.joomcdn.net/72972a62562a277ba3e0349e69b81cc8b7ae0962_original.jpeg"]
        },

        {
            id: "2",
            productName: "Men sports shoes",
            productBrand: "hotstyle",
            category: "sports",
            itemType: "shoes",
            currentPrice: "₹247",
            prevPrice: "₹499",
            offer: "50%",
            productDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam sapiente tempora excepturi minus alias praesentium quam, iste mollitia! Mollitia minima optio ad libero molestias voluptatem ducimus vero! Consequuntur veniam facilis perspiciatis? Itaque, qui?",
            specs: {"Color":"Black", "Outer Material":"Canvas", "Ideal for":"Sports", "Sole Material":"PVC", "Closure":"Lace-Ups", "Upper Pattern":"Woven Design", "Pack of":"1"},
            images: ["https://trek.scene7.com/is/image/TrekBicycleProducts/Cycling_Shoes_Marquee_16x9?$responsive-pjpg$&cache=on,on&wid=1920", "https://cdn.fashiola.in/L84863407/afrojack-men-black-printed-sneakers.jpg", "https://img.joomcdn.net/72972a62562a277ba3e0349e69b81cc8b7ae0962_original.jpeg"]
        },
    ]

    return (
        <AllProductContext.Provider value={productData}>
            {children}
        </AllProductContext.Provider>
    )
}
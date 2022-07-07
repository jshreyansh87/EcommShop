import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router";

import Navbar from './Components/Utils/Navbar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Footer from './Components/Utils/Footer';
import ProductView from './Components/ProductView';
import ProductList from './Components/ProductList';
import { AllProductProvider } from './Context/AllProductContext';

import './App.css';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);

  return (

    <AllProductProvider>

      <div className='App'>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />

          {/* Update all the routes here */}

          <Route path='products' element={<ProductList />} />
          <Route path="product/:productId" element={<ProductView />} />
          <Route path='wishlist' element={<Home name="Display Wishlist" />} />
          <Route path='cart' element={<Cart />} />
          <Route path='profile' element={<Home name="Display Profile" />} />
        </Routes>

        <Footer />
      </div>

    </AllProductProvider>

  );
}

export default App;
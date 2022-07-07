import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './Components/Utils/Navbar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Footer from './Components/Utils/Footer';
import ProductView from './Components/ProductView';
import ProductList from './Components/ProductList';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { AllProductProvider } from './Context/AllProductContext';

function App() {
  return (

    <AllProductProvider>

      <div className='App'>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />

          {/* Update all the routes here */}

          <Route path='about' element={<ProductList />} />
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

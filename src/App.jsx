import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './Components/Utils/Navbar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Footer from './Components/Utils/Footer';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ProductView from './Components/ProductView';

function App() {
  return (

    <div className='App'>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        
        {/* Update all the routes here */}

        <Route path='about' element={<ProductView />} />
        <Route path='wishlist' element={<Home name="Display Wishlist" />} />
        <Route path='cart' element={<Cart /> } />
        <Route path='profile' element={<Home name="Display Profile" />} />
      </Routes>

      <Footer />
    </div>

  );
}

export default App;

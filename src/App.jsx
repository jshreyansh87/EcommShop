import './App.css';
import Navbar from './Components/Assets/Navbar';
import Home from './Components/Home';

import { Routes, Route } from "react-router-dom";

function App() {
  return (

    <div className='App'>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<Home name={"Display About"} />} />
        <Route path='wishlist' element={<Home name="Display Wishlist" />} />
        <Route path='cart' element={<Home name="Display Cart" />} />
        <Route path='profile' element={<Home name="Display Profile" />} />
      </Routes>
    </div>

  );
}

export default App;

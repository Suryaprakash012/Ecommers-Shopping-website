import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Pages/Home';
import ProductList from './components/Pages/ProductList';
import { useState } from 'react';
import Cart from './components/Pages/Cart';
// import Form from './components/Pages/Form';
import Display1 from './components/Pages/Display';
import Forms from './components/Pages/Rigister';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cartItems.filter((product) => product.id !== productToRemove.id);
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <Main />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<ProductList addToCart={addToCart}/>} />
        <Route path="/card" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}/>}/>
        <Route path="/" element={<Forms/>} />
        <Route path="/display" element={<Display1/>} />


      </Routes>
    </Router>
   
  );
}

export default App;




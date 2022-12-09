import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import ProductsPage from '../ProductsPage/ProductsPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import AboutUs from '../AboutUs/AboutUs';
import Snowfall from "react-snowfall"
import Footer from "../../components/Footer/footer";
import { list } from '../../data'
import Cart from '../Cart/cart';
import Refund from '../Refund/Refund'
import Terms from '../Terms/Terms'
import Contact from '../Contact/Contact'
import Payment from '../Payment/payment';

import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)
  useEffect(function () {
    async function getCart() {
      const items = await fetch(`/cart/${user._id}`).then(res => res.json())
      setCart(items)


    }

    getCart()


  }, [quantity])

  return (

    <main className="App">
      {user ?
        <>
          <Snowfall
            style={{
              position: 'fixed',
              width: '100vw',
              height: '100vh',
            }}
            snowflakeCount={200} />
          <NavBar user={user} setUser={setUser} quantity={quantity} />
          <Routes>
            {/* Route components in here */}
            <Route path="/products" element={<ProductsPage list={list} user={user} quantity={quantity} setQuantity={setQuantity} />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/info" element={<AboutUs />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} user={user} quantity={quantity} setQuantity={setQuantity} />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          <br></br><br></br>
          <Footer />

        </>
        :
        <AuthPage setUser={setUser} />


      }
    </main>
  );
}



export default App;

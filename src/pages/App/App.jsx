import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import ProductsPage from '../ProductsPage/ProductsPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import AboutUs from '../AboutUs/AboutUs';
// import Snowfall from "react-snowfall"
import Footer from "../../components/Footer/footer";
import { list } from '../../data'
import Cart from '../Cart/cart';
import Refund from '../Refund/Refund'
import Terms from '../Terms/Terms'
import Contact from '../Contact/Contact'

import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState([])
  useEffect(function () {
    async function getCart() {
      const items = await fetch(`/cart/${user._id}`).then(res => res.json())
      setCart(items)


    }
    getCart()


  }, [])


  return (

    <main className="App">
      {user ?
        <>
          {/* <Snowfall 
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
        snowflakeCount={200}/> */}
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/products" element={<ProductsPage list={list} user={user} />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/info" element={<AboutUs />} />
            <Route path="/cart" element={<Cart cart={cart}/>} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
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

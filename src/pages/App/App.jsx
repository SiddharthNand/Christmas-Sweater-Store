import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import ProductsPage from '../ProductsPage/ProductsPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import AboutUs from '../AboutUs/AboutUs';
import Snowfall from "react-snowfall"
import Footer from "../../components/Footer/footer";
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    
    <main className="App">
      { user ?
        <>
        <Snowfall 
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
        snowflakeCount={100}/>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/orders/new" element={<ProductsPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/info" element={<AboutUs />} />
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

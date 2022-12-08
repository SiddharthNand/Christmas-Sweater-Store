import * as userService from '../../utilities/users-service';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';

export default function NavBar ({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <Navbar className="bsNav" style={{ backgroundColor: '#599C5D' }} expand="lg">
    <div className="TNE"><Navbar.Brand style={{ color: "white"}}>TNE Clothing</Navbar.Brand></div>
    <Navbar.Toggle aria-controls="navbarNav" />
    <Navbar.Collapse id="navbarNav">
      <Nav className="me-auto ml-auto">
        <Nav.Link href="#" style={{ color: "white" }}>Welcome, {user.name}</Nav.Link>
        <Nav.Link href="/products" style={{ color: "white" }}>Shop</Nav.Link>
        {/* <Nav.Link href="/orders/" style={{ color: "white" }}>Order History</Nav.Link> */}
        <Nav.Link href="/info" style={{ color: "white" }}>About Us</Nav.Link>
        </Nav>
        <Nav.Link href="/cart" style={{ color: "white" }}>Cart</Nav.Link> &nbsp;&nbsp;&nbsp;
        <Nav.Link href="#" onClick={handleLogOut} style={{ color: "white" }}>Log Out</Nav.Link>
    </Navbar.Collapse>
  </Navbar>
  )};
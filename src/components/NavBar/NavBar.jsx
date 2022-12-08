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
    <div className="TNE"><Navbar.Brand>TNE Clothing</Navbar.Brand></div>
    <Navbar.Toggle aria-controls="navbarNav" />
    <Navbar.Collapse id="navbarNav">
      <Nav className="me-auto ml-auto">
        <Nav.Link href="#">Welcome, {user.name}</Nav.Link>
        <Nav.Link href="/products">Shop</Nav.Link>
        <Nav.Link href="/orders/">Order History</Nav.Link>
        <Nav.Link href="/info">About Us</Nav.Link>
        <Nav.Link href="/cart">Cart</Nav.Link> 
        <Nav.Link href="#" onClick={handleLogOut}>Log Out</Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Navbar>
  )};
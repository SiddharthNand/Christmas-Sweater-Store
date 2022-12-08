// import items from '../../../models/cart'
// import { NavItem } from "react-bootstrap";
import './cart.css'

export default function Cart({ cart }) {
    console.log(cart)
    return (
        <>
            <h1>Shopping Cart</h1>
            {cart.map(item =>
                <div className="basket">

                    <img src={item.img} className="basketImg"/>
                    <br></br><br></br>
                    <p> price: {item.price} </p>
                    <h5>  {item.item} </h5>
                </div>
            )}
        </>
    )
}
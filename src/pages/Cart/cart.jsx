import './cart.css'
import { useEffect } from 'react'

export default function Cart({ cart, quantity, setQuantity, user, setCart}) {


  const handleClick = async (item, e) => {
    e.preventDefault()
    console.log(item)
    const response = await fetch(`/cart/${item._id}`, {
      method: 'DELETE'
    }).then(res => res.json())
    console.log(response)
   setQuantity(quantity - 1)
  }
  return (
    <>
      <h1>Shopping Cart</h1>
      {cart.map(item =>
        <div className="basket">
          <br></br>
          <img className="basketImg" src={item.img} alt='product image' />
          <br></br><br></br>
          <p>price: {item.price}</p>
          <h5>{item.item}</h5>
          <button className='delete' onClick={e => handleClick(item, e)}>Delete</button>
        </div>
      )}

      <br></br>
      <a href='/payment'><button>Check out</button></a>
      <br></br>
      <br></br>

      <a href='https://www.amazon.com/s?rh=n%3A7141123011%2Cp_4%3ATNE+Prints&ref=bl_sl_s_ap_web_7141123011' target="_blank">
        <button className='amazonB'>
          <img src="/stylesheets/images/Logo-amazon.png" className='amazon'>
          </img>
        </button>
      </a>
    </>
  )
}

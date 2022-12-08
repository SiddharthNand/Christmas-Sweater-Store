import './cart.css'

export default function Cart({ cart }) {
    return (
<>
    <h1>Shopping Cart</h1>
    {cart.map(item =>
        <div className="basket">

            <img className="basketImg" src={item.img}  alt='product image' />
            <br></br><br></br>
            <p> price: {item.price} </p>
            <h5>  {item.item} </h5>
        </div>
        
    )}

    <br></br>
    <button>Check out</button>
    <br></br>
    <br></br>
    
    <a href='https://www.amazon.com/s?rh=n%3A7141123011%2Cp_4%3ATNE+Prints&ref=bl_sl_s_ap_web_7141123011' target="_blank">
        <button className='amazonB'>
            <img src="/stylesheets/images/Logo-amazon.png" className='amazon'>
                </img>
            </button>
        </a>
</>
)}
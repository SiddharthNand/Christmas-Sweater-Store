import './Products.css';
import ProductCard from '../../components/ProductCard'
// import { useState} from "react";



// const [cart, setCart] = useState([]);




export default function ProductsPage({list, user}) {
  const handleClick = async(item) => {
    console.log(item)
    const res = await fetch (`/cart/${user._id}`, {
      method:'POST', 
      headers: {'Content/Type':'application/json'}, 
      body: JSON.stringify({item:item.item, price:item.price, img:item.img, user:user._id})
    })
    res.json()
    console.log(res)
  } 
  const productsCards = list.map((item, index ) => {
    return <ProductCard key={`${index}`} item={item} handleClick={handleClick}/>
  })
  return (
   <>
   <h1>Christmas Sweaters</h1>
   {productsCards}
  </>
  );
}



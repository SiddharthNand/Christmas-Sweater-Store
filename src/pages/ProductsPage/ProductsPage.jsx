import './Products.css';
import ProductCard from '../../components/ProductCard'
import { useState} from "react";



// const [cart, setCart] = useState([]);

const handleClick = (item) => ( 
    console.log (item)
)

export default function ProductsPage({list}) {
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



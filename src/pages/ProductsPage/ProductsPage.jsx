import './Products.css';
import ProductCard from '../../components/ProductCard'

export default function ProductsPage({list}) {
  const productsCards = list.map((item, index ) => {
    return <ProductCard key={`${index}`} item={item} />
  })
  return (
   <>
   <h1>Christmas Sweaters</h1>
   {productsCards}
  </>
  );
}



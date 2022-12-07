function ProductCard ({ item }) {
   console.log({item}) 
    return (
        <div className="cards">
            <div className="image_box">
                <img src={item.img} alt={item.id} />
            </div>
            <div className="details">
                <p>{item.item}</p>
                <p>{item.price}</p>
                <button>Add to Cart</button> 
            </div>
        </div>
    );
}

export default ProductCard;
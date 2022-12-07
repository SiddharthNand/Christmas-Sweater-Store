function ProductCard ({ item, handleClick }) {


    return (
        <div className="cards">
            <div className="image_box">
                <img src={item.img} alt={item.id} />
            </div>
            <div className="details">
                <p>{item.item}<br></br>
                {item.price}</p>
               </div>
               <button onClick={() => handleClick(item)}>Add to Cart</button> 
        </div>
    );
}

export default ProductCard;
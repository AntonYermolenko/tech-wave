import { useParams } from "react-router-dom"
import { CategoriesContext } from "../contexts/categories.context";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/cart.context";


import "./product-page.styles.scss"



export const  ProductInfo = ( {categoriesMap} ) => {
    const { addItemToCart } = useContext(CartContext); 
    const { productId } = useParams();  

    const Categories = Object.values(categoriesMap).map((category) => category.find((product) => product.id == productId));
    const product = Categories.find((product) => product !== undefined );
    const {name, imageUrl, price, specification, id } = product
    const [ image, setImage ] = useState(imageUrl[0])
      

    const onMouseOverHandler = (event) => {
        setImage(event.target.src)
    }


    const onClickHandler = () => {
        addItemToCart(product);
    }

    return(
        <div className="product-page-container">
        <div className="product-container" key={id}>
            <div className="image-container" >
            {imageUrl.map((image) =>
                <img className="image-carousel" key={image} src={image} onMouseOver={onMouseOverHandler}/>
            )}
            
            </div>
            <img className="product-main-img" src={image} />    
        </div>
        <div className="product-details">
            <h1 className="text-lg">{name}</h1>
            <h2 className="product-page-price">${price}</h2>
            <button className="sign-in-button" onClick={onClickHandler}>Add to cart</button>
            <div className="specifications">                  
                <ul>
                    {specification.map((spec) => 
                        <li>{spec}</li>
                    )}
                </ul>
            </div>
        </div>
    </div>
    )
}
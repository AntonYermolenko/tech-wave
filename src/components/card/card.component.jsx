import CART_ADD from "../../cart-plus-svgrepo-com.svg";
import { useContext, useState } from 'react';
import { CartContext } from '../contexts/cart.context';
import { Link } from "react-router-dom";
import "./card.styles.scss";




export const Card = ({ product }) => {
    const  {id, name, price, imageUrl} = product;
    const { addItemToCart, cartItems } = useContext(CartContext);
    const [ productImage, setProductImage ] = useState(imageUrl[0]);
  

    const onMouseOverHandler = () => {
        setProductImage(imageUrl[1]);
    }

    const onMouseLeaveHandler = () => {
        setProductImage(imageUrl[0]);
    }


    const onClickHandler = () => {
        addItemToCart(product);
    }
    
    return( 
        <div key={id} className="shop-item-container" onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeaveHandler}  >
            <Link to={`/product/${id}`} relative="path" >
                <img src={productImage} key={id} className="product-img" />
                <h1 className="product-name" >{name}</h1> 
            </Link>
            <div className="item-description"> 
               <h1 className="product-price">${price}</h1>
                <img src={CART_ADD} className="cart-add-icon" key={id} onClick={onClickHandler}/>
            </div>  
        </div>
    )
}

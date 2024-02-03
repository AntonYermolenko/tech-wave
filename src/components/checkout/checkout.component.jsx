import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import "./checkout.styles.scss";
import decrease from "../../arrow-prev-small-svgrepo-com.svg";
import increase from "../../arrow-next-small-svgrepo-com.svg";
import cross from "../../cross-svgrepo-com.svg"
import { Link } from "react-router-dom";


export const Checkout = () => {
    const {cartItems, addItemToCart, removeItemToCart, clearItemFromCart, cartTotal} = useContext(CartContext);

    return(
        <div className="cart-items-conatiner">
            <div className="cart-items-conatiner2">
            { cartItems.map((item) => {
                const {name, quantity, imageUrl, price, id} = item;
                return(
                    <div className="cart-items">
                        <img src={imageUrl[0]} className="checkout-item-img"/>
                        <Link to={`/product/${id}`} relative="path">   
                            <h1 className="checkout-item-name">{name}</h1>
                        </Link>

                        <div className="item-quantity">
                            <h1 className="cart-item-price">${price}</h1>
                            <a onClick={() => removeItemToCart(item)} ><img src={decrease} className="arrow" /></a>
                            <h1>
                                {quantity}
                            </h1>
                            <a onClick={() => addItemToCart(item)}><img src={increase} className="arrow" /></a>
                            <a onClick={() => clearItemFromCart(item)}><img className='remove-item' src={cross}/></a>
                        </div>
                        
                    </div>
                )
            })}
            {cartTotal > 0 
            ?  (<h1 className="cart-total">Total: ${cartTotal.toFixed(2)} </h1>)
            : <h1> Your cart is empty</h1>
            }
            </div>
           
        </div>
    )
};
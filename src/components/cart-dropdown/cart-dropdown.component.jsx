import { CartItem } from '../cart-item/cart-item.component';
import './cart-dropdown.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';

export const CartDropdown = () => {
    const { cartItems, cartItemsCount, setIsCartOpen,isCartOpen, cartTotal } = useContext(CartContext);
    const onClickHandler = () => {
        setIsCartOpen(!isCartOpen);
    }
    
    const onMouseLeaveHandler = () => {
        setIsCartOpen(!isCartOpen);
    }

    return(
        <div className="cart-dropdown-container" onMouseLeave={onMouseLeaveHandler}>
            <div className="cart-items" >
            { cartItems.map((item) =>( <CartItem key={item.id} CartItem={item} />))}
            
            </div>
            <div className='button-conatiner'>
                {
                    cartTotal > 0 
                    ?
                        <Link to="/checkout">
                            <button className='sign-in-button' onClick={onClickHandler}>Checkout</button>
                        </Link>
                    : <h3>Your cart is Empty</h3> 
                }
            </div>
        </div>
    )
};
import user from "../../user-svgrepo-com.svg"
import logo from "../../keyboard.png";
import shoppingCart from "../../cart-shopping-svgrepo-com.svg";
import "./navigation.styles.css"
import { Link, Outlet } from "react-router-dom";
import { CartDropdown } from "../cart-dropdown/cart-dropdown.component";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import { SearchBar } from "../search/search.component";




export const Navbar = () => {
    const {isCartOpen, setIsCartOpen, cartItemsCount} = useContext(CartContext);
    const onClickHandler = () => {
        setIsCartOpen(!isCartOpen);
    }
    
    return(
        <div className="nav-bar">
         
                <div>
                    <Link to="/">
                        <span><img src={logo} className="img logo"/></span>
                    </Link>
                </div>
                <div>
                    <SearchBar />
                </div>
                <div>
                    <div className="user-container">
                        <Link to="/user">
                            <span><img src={user} className="user-img" /></span>
                        </Link>
                        <Link>
                            <span className="cart-container">
                                <img src={shoppingCart} className="cart-img" onClick={onClickHandler}  />
                                    <p className="cart-items-count">
                                        {cartItemsCount > 0 
                                        ? cartItemsCount 
                                        : null
                                        }
                                    </p>
                            </span>
                        </Link>
                    </div>
                {isCartOpen && <CartDropdown /> }
            </div>
        </div>
        
    )
}
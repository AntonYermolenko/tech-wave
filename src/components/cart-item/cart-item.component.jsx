import './cart-item.styles.scss';

export const CartItem = ({CartItem}) => {
    const {name, quantity, imageUrl, price} = CartItem;
    return(
        <div className="cart-item-container">
            <img src={imageUrl[0]} />
            <div className='item-details'>
                <h2 className='item-name'>{name}</h2>
                <span className='item-quantity'>{quantity} x</span>
                <h2 className='item-price'>${price}</h2>
            </div>
        </div>
    )
};
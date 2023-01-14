import { useEffect } from "react";
import cart from "../img/cart.png"
import minus from '../img/minus.png'
import plus from '../img/plus.png'
const Cart = ({ cartItems, handleImgClickOnCart }) => {
    const exit = '&times;';
    console.log('current cart', cartItems)
    console.log('YEAH', (cartItems.length));
    return (
        <div className="knives-list cart">
            {cartItems.length === 1 ? <div>nothing to see here..</div> :
                cartItems.slice(1).map((image, index) => (
                    <div key={index} className="cartItems">
                        <div className="exitbutton">×</div>
                        <div className="itemSummary">
                            <div className="itemName">
                                <img id={"item" + index} className='knives-images cart' src={image.img} alt={"testingimg"} />
                                <span>{image.imgName}</span>
                            </div>
                            <div className="quantity">
                                <img onClick={(e) => handleImgClickOnCart(e)} id={"minus" + index} className="img-quantity" alt="minus" src={minus} />
                                <input defaultValue={image.quantity} id={'input' + index} readOnly={true} type="number"></input>
                                <img onClick={(e) => handleImgClickOnCart(e)} id={"add" + index} className="img-quantity" alt="plus" src={plus} />
                                <p>{image.subtotal}</p>
                            </div>
                        </div>
                    </div>
                ))}

        </div>
    )
}

export default Cart;
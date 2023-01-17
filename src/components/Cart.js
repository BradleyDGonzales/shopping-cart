import { useEffect, useState } from "react";
import cart from "../img/cart.png"
import minus from '../img/minus.png'
import plus from '../img/plus.png'
import uniqid from 'uniqid'
const Cart = ({ cartItems, handleImgClickOnCart, onDeleteClick }) => {
    const [overallTotal, setOverallTotal] = useState(0)

    const exit = '&times;';
    console.log('current cart', cartItems)

    useEffect(() => {
        console.log('ran oh yeah', cartItems)
        const addSubtotals = cartItems.slice(1).map((item) => {
            return item.subtotal;
        })
        const finalSubtotal = addSubtotals.reduce((partialSum, a) => partialSum + a, 0)
        setOverallTotal(finalSubtotal);
    },[cartItems])

    return (
        <div className="knives-list cart">
            {cartItems.length === 1 ? <div>nothing to see here..</div> :
                cartItems.slice(1).map((image, index) => (
                    <div key={uniqid()} id={`cartItem${index}`} className="cartItems">
                        <div className="exitbutton" >
                            <span onClick={(e) => onDeleteClick(e)} id={`deleteItem${index}`}>×</span>
                        </div>
                        <div className="itemSummary">
                            <div className="itemName">
                                <img id={"item" + index} className='knives-images cart' src={image.img} alt={"testingimg"} />
                                <span className="itemImgName">{image.imgName}</span>
                            </div>
                            <div className="quantity">
                                <img onClick={(e) => handleImgClickOnCart(e)} id={"minus" + index} className="img-quantity" alt="minus" src={minus} />
                                <input defaultValue={image.quantity} id={'quantityinput' + index} type="number"></input>
                                <img onClick={(e) => handleImgClickOnCart(e)} id={"add" + index} className="img-quantity" alt="plus" src={plus} />
                                <p>{image.subtotal}</p>
                            </div>
                        </div>
                    </div>
                ))}
            <p>{overallTotal !== 0 ? overallTotal : null}</p>

        </div>
    )
}

export default Cart;
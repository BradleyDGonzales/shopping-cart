import { useEffect, useState } from "react";
import minus from '../img/minus.png'
import plus from '../img/plus.png'
import uniqid from 'uniqid'
import emptycart from '../img/empty-cart.png'
import { Link } from "react-router-dom";
const Cart = ({ cartItems, handleImgClickOnCart, onDeleteClick, handleCheckout }) => {
    const [overallTotal, setOverallTotal] = useState(0)

    useEffect(() => {
        const addSubtotals = cartItems.slice(1).map((item) => {
            return item.subtotal;
        })
        const finalSubtotal = addSubtotals.reduce((partialSum, a) => partialSum + a, 0)
        setOverallTotal(finalSubtotal);
    }, [cartItems])

    return (
        <>
            <div className="myCart">
                {cartItems.length === 1 ?
                    <div className="emptyCart">
                        <div className="card">
                            <p>Your cart is empty.. :/</p>
                            <img id="emptycarticon" alt="empty-cart" src={emptycart}></img>
                        </div>
                    </div> :
                    <div className="knives-list cart">
                        {cartItems.slice(1).map((image, index) => (
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
                                        <input defaultValue={image.quantity} id={'quantityinput' + index} type="text"></input>
                                        <img onClick={(e) => handleImgClickOnCart(e)} id={"add" + index} className="img-quantity" alt="plus" src={plus} />
                                    </div>
                                    <p className="item-subtotal" id={"subtotal" + index}>${Number(image.subtotal).toFixed(2)}</p>
                                </div>
                            </div>))}
                    </div>
                }
                {overallTotal !== 0 ? <p className="emptyCartText">{`Total $: ` + overallTotal.toFixed(2)} </p> : null}
                {overallTotal === 0 ? null : <Link onClick={() => handleCheckout()} to={"/checkout"}>
                    <button className="checkoutbutton">Checkout</button>
                </Link>}


            </div>
        </>
    )
}

export default Cart;
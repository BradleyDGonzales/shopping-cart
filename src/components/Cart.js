import { useEffect } from "react";
import cart from "../img/cart.png"

const Cart = ({cartItems}) => {
    console.log('YEAH', (cartItems.length));
    return (
        <>
        <div>{cartItems.length === 1 ? <div>nothing to see here..</div> : cartItems.slice(1).map((image) => (
            <img src={image.img} alt={"testingimg!"}/>
        ))}</div>
        </>
    )
}
export default Cart;
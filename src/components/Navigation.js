import { useEffect } from "react";
import { Link } from "react-router-dom";
import cart from "../img/cart.png"
const Navigation = ({ count }) => {
    useEffect(() => console.log(count))
    const style = {
        color: 'white',
    };
    return (
        <nav>
            <Link style={style} className="nav-logo" to='/'>
                <h3>Logo</h3>
            </Link>
            <ul className="nav-links">
                <Link style={style} to='/about'>
                    <li>About</li>
                </Link>
                <Link style={style} to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link style={style} to='/cart'>
                    <img alt="cart" src={cart} />
                </Link>
                <p>{count}</p>
            </ul>
        </nav>
    )
}

export default Navigation;

import { Link } from "react-router-dom";
import cart from "../img/cart.png"
const Navigation = ({ count }) => {
    return (
        <nav className="header">
            <Link className="nav-logo" to='/home'>
                <h3 id="logotext">Arthur's Vault</h3>
            </Link>
            <ul className="nav-links">
                <Link to='/shop'>
                    <div id="shoptext">Shop</div>
                </Link>
                <Link to='/cart'>
                    <img alt="cart" src={cart} />
                </Link>
                <p>{count}</p>
            </ul>
        </nav>
    )
}

export default Navigation;
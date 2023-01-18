import { Link } from "react-router-dom";
import bowieknife from '../img/bowie-knife4.jpg'
import butterflyknife from '../img/butterfly-knife3.jpg'
import stilettoknife from '../img/stiletto-knife2.jpg'
import tacticalknife from '../img/tactical-knife1.jpg'
const Shop = () => {
    return (
        <div className='knives-list shop'>
            <Link className="shoplink" to='/bowie-knives'>
                <img className="knives-images" alt="bowieknife" src={bowieknife}></img>
                <div className="knives-names">Bowie Knives</div>
            </Link>
            <Link className="shoplink" to='/butterfly-knives'>
                <img className="knives-images" alt="butterflyknife" src={butterflyknife}></img>
                <div className="knives-names">Butterfly Knives</div>
            </Link>
            <Link className="shoplink" to='/stiletto-knives'>
                <img className="knives-images" alt="stilettoknife" src={stilettoknife}></img>
                <div className="knives-names">Stiletto Knives</div>
            </Link>
            <Link className="shoplink" to='/tactical-knives'>
                <img className="knives-images" alt="tacticalknife" src={tacticalknife}></img>
                <div className="knives-names">Tactical Knives</div>
            </Link>
        </div>
    )
}

export default Shop;
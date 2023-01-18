import butterflyKnifeImages from './imgButterflyKnives';
import minus from '../img/minus.png'
import plus from '../img/plus.png'
import { Link } from 'react-router-dom';
const ButterflyKnives = ({ handleClick }) => {

    function handleImgClick(e) {
        const inputID = e.target.id.slice(-1)
        const selectInput = document.getElementById(`input${inputID}`)
        if (parseInt(selectInput.value) === 1 && e.target.alt === 'minus') {
            return null;
        }
        else {
            e.target.alt === 'plus' ? selectInput.value++ : selectInput.value--;
        }
    }
    return (
        <>
            <div className='knives-list'>
                {(butterflyKnifeImages.map((img, index) => (
                    <div key={index} className="card">
                        <img id={'butterflyknife' + index} className='knives-images' alt={img.imgName} src={img.img} />
                        <h3 className='knives-name'>{img.imgName}</h3>
                        <p className='knives-price' id={"price" + index}>${img.price.toFixed(2)}</p>
                        <div className="quantity">
                            <img onClick={(e) => handleImgClick(e)} id={"minus" + index} className="img-quantity" alt="minus" src={minus} />
                            <input defaultValue={1} id={'input' + index} type="text"></input>
                            <img onClick={(e) => handleImgClick(e)} id={"add" + index} className="img-quantity" alt="plus" src={plus} />
                        </div>
                        <div className="options">
                            <button id={"addtocart" + index} className="addtocartbutton" onClick={(e) => handleClick(e)}> Add to cart</button>
                            <Link onClick={(e) => handleClick(e)} className="buynowlink" id={"buynow" + index} to='/cart'>Buy now</Link>
                        </div>
                    </div>
                )

                ))}

            </div>
        </>
    )
}

export default ButterflyKnives;
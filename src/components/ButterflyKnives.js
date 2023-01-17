import butterflyKnifeImages from './imgButterflyKnives';
import minus from '../img/minus.png'
import plus from '../img/plus.png'
import { useState } from 'react';
import Cart from './Cart';
const ButterflyKnives = ({handleClick}) => {

    function handleImgClick(e) {
        console.log('imgcliucktet')
        const inputID = e.target.id.slice(-1)
        const selectInput = document.getElementById(`input${inputID}`)
        e.target.alt === 'plus' ? selectInput.value++ : selectInput.value--;
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
                            <input defaultValue={0} id={'input' + index} type="number"></input>
                            <img onClick={(e) => handleImgClick(e)} id={"add" + index} className="img-quantity" alt="plus" src={plus} />

                        </div>
                        <button id={"addtocart" + index} onClick={(e) => handleClick(e)}> Add to cart</button>
                        <button> Buy now</button>
                    </div>
                )

                ))}

            </div>
        </>
    )
}

export default ButterflyKnives;
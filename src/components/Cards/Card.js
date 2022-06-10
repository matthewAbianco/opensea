import React from 'react'
import './Cards.css'
import weth from './assets/weth.png'


const Card = ({ name, id, traits, image }) => {
    return (
        <div className='cards'>
            <img src={image} alt="" />
            <div className='details'></div>
            <div className='name'>
                {name} <div className='id'>#{id}</div>

                <div className='priceContainer'>
                    <img src={weth} className='wethSymbol' alt="" />
                    <div className='price'>{traits[0]?.value} </div>
                </div>
            </div>
        </div>
    )
}

export default Card
import React, { useState, useEffect } from 'react'
import './Main.css'
import twitter from './assets/twitter.png'
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import matt from './assets/matt.png'

const Main = ({ card, imageData }) => {

    const [activeCard, setActiveCard] = useState(imageData[0])

    useEffect(() => {
        setActiveCard(imageData[card])
    }, [imageData, card])


    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='cardHighlight'>
                    <div className='cardContainer'>
                        <a href={`https://testnets.opensea.io/assets/rinkeby/0xb5d855f3c8f03cda4b909c411515d4c8e3157325/${activeCard.token_id}`} target='__blank' >
                            <img
                                className='selectedCard'
                                src={activeCard?.image_url}
                                alt='' />
                        </a>
                    </div>
                </div>

                <div className='cardDetails'>
                    <div className='title'>{activeCard.name}</div>
                    <span className='itemNumber'>Token #{activeCard.token_id}</span>


                    <div className='owner'>
                        <div className='ownerImageContainer'>
                            <img src={matt} alt=" " />
                        </div>

                        <div className='ownerDetails' >
                            <div className='ownerNameAndHandle'>
                                <div>Address: {activeCard.owner.address}</div>
                                <div className='ownerHandle'>Twitter:  @matthewbianco15</div>
                                <a href='https://testnets.opensea.io/collection/mattbiancofirsttest' target='_blank' >OpenSea: https://testnets.opensea.io/collection/mattbiancofirsttest</a>
                            </div>
                            <div className='ownerLink'>
                                <img src={instagram} alt='' />
                            </div>
                            <div className='ownerLink'>
                                <img src={twitter} alt='' />
                            </div>
                            <div className='ownerLink'>
                                <img src={facebook} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
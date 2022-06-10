import React from 'react'
import './CardList.css'
import Card from '../Cards/Card'

const CardList = ({ imageData, setCard }) => {


    return (

        <div className='cardlist'>
            {imageData.map((data, index) => (
                <div className='mappedCard' onClick={() => setCard(index)} >
                    <Card
                        key={data.token_id}
                        id={data.token_id}
                        name={data.name}
                        traits={data.traits}
                        image={data.image_original_url}
                    />
                </div>
            ))}
        </div>
    )
}

export default CardList
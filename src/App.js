import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';
import Main from './components/Main/Main';

function App() {

    const [imageData, setImageData] = useState([])
    const [card, setCard] = useState(0)



    useEffect(() => {
        const fetchNft = async () => {
            const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xB5d855f3c8f03CDa4b909c411515D4c8e3157325&order_direction=asc')
            setImageData(openseaData.data.assets)
        }
        return fetchNft
    }, [])



    return (
        <div className="app">
            <div className='header' >
                <Header />
            </div>

            {imageData.length > 0 && (
                <>
                    <div className='main' >
                        <Main imageData={imageData} card={card} />
                    </div>
                    <div className='cardlist' >
                        <CardList imageData={imageData} setCard={setCard} />
                    </div>
                </>
            )}
        </div>
    );
}

export default App;

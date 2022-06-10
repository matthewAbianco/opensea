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
      <Header />
      {imageData.length > 0 && (
        <>
          <Main imageData={imageData} card={card} />
          <CardList imageData={imageData} setCard={setCard} />
        </>
      )}
    </div>
  );
}

export default App;

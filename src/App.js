import axios from 'axios'
import { useState } from 'react'
import Card from './Card';
import './App.styles.css'
function App() {
  const [cards, setCards] = useState("");
  const [info, setInfo] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [store, setStore] = useState("GolfNow")
  const submitHandle = async () => {
    setLoading(true)
    const response = await axios.post(`${process.env.REACT_APP_URL}/v1/giftcard`, { card: cards, store: store })
    setInfo(response.data)
    setLoading(false)
  }
  if (isLoading === false) {
    return (
      <div className="App">
        <select style={{ "width": "30%" }} onChange={e => setStore(e.target.value)}>
          <option>GolfNow</option>
          <option>Fatz</option>
          <option>Erberts and Gerberts</option>
        </select>
        <br></br>
        <textarea style={{ "width": "30%", "alignItems": "center" }} rows="10" onChange={e => setCards(e.target.value)} />
        <button onClick={() => submitHandle()}>Submit</button>
        {info.map((card) => (
          <Card card={card} key={card.cvv} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="App">
        <select style={{ "width": "30%" }} onChange={e => setStore(e.target.value)}>
          <option>GolfNow</option>
          <option>Fatz</option>
          <option>Scrubs and Beyond</option>
          <option>Runza</option>
          <option>Erberts and Gerberts</option>
          <option>Coffee Beanery</option>
          <option>Popbar</option>
          <option>C.J. Barrymore's</option>
          <option>Cos Bar</option>
        </select>
        <br></br>
        <textarea style={{ "width": "30%", "alignItems": "center" }} rows="10" onChange={e => setCards(e.target.value)} />
        <button onClick={() => submitHandle()}>Submit</button>
        <p>loading</p>
      </div>
    );
  }
}

export default App;

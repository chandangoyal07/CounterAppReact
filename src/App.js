import './App.css';
import { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(0);

  const handleClickPlus = () => {
    setCounter(counter + 1)
  }

  const handleClickMinus = () => {
    if(counter>0){
    setCounter(counter - 1)}else{
      alert('count is negative')
    }
  }

  return (
    <div className="App">
      <h1>CounterAPP</h1>
      <h1 className='display'>{counter}</h1>
      <div className='butt'>
        <button onClick={handleClickPlus} className="plus">+</button>
        <button onClick={handleClickMinus} className='minus'>-</button>
      </div>
    </div>
  );
}

export default App;

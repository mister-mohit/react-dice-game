import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import GameStarted from './components/GameStarted';

function App() {

  const [isStart, setIsStart] = useState(false);

  function startGame(){
    setIsStart(true);
  }

  return (
    <>
      {isStart ? <GameStarted /> : <Home setIsStart={setIsStart} />}
    </>
  );
}

export default App;

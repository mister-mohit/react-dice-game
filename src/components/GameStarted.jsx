import React, {useState} from 'react';
import styled from 'styled-components';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';
import { OutlineButton, Button } from './Button';
import Rules from './Rules';

const GameStarted = () => {

  const [selected, setSelected] = useState();
  const [score, setScore] = useState(0);
  const [randomNumber, setRandomNumber] = useState(1);
  const [error, setError] = useState("");
  const [showRule, setShowRule] = useState(false);

  function generateRandomNumber(){
    return Math.floor((Math.random()*6) + 1);
  }

  function handleClick(){
    if(!selected){
        setError("You have not selected any number.");
        return;
    }
    const randNumber = generateRandomNumber;
    setRandomNumber(randNumber);

    if(selected == randNumber){
        setScore((prev) => prev + selected);
    }else {
        setScore((prev) => prev -2 );
    }
    
    setSelected(undefined);
  }


  return (
    <MainContainer>
        <div className="top_section">
            <TotalScore score={score}></TotalScore>
            <NumberSelector selected={selected} setSelected={setSelected} error={error} setError={setError}></NumberSelector>
        </div>

        <RollDice handleClick={handleClick} randomNumber={randomNumber} ></RollDice>

        <div className="btns">
            <OutlineButton onClick={() => setScore(0)}>Reset Score</OutlineButton>
            <Button onClick={() => setShowRule((prev) => !prev)}>{showRule ? "Hide" : "Show"} Rules</Button>
        </div>
        {showRule && <Rules></Rules>}
    </MainContainer>
  );
}

export default GameStarted;

const MainContainer = styled.div`
.top_section{
    max-width: 1280px;
    margin: 0 auto;
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: end;
}

.btns{
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      align-items: center;
  }
`;
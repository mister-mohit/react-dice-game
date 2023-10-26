import styled from 'styled-components';
import { Button, OutlineButton } from './Button';

const RollDice = ({randomNumber, handleClick}) => {
  console.log(randomNumber);
  return (
    <RollDiceContainer>
            <img onClick={handleClick} src={`/images/dice_${randomNumber}.png`} alt="dice"></img>
            <p>Click on dice to roll</p>
    </RollDiceContainer>
  );
}

export default RollDice;

const RollDiceContainer = styled.div`
max-width: 250px;
margin: 0 auto;
    p{
        text-align: center;
        font-size: 24px;
        font-weight: medium;
    }



`;
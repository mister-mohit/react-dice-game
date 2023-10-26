import styled from 'styled-components';
import { Button } from './Button';

const Home = ({setIsStart}) => {

  function handleClick(){
    setIsStart(true);
  }

  return (
    <HomeContent>
        <img src="/images/dices 1.png" alt="dices"></img>
        <div className="text_content">
            <h1>Dice Game</h1>
            <Button onClick={handleClick}>Play Now</Button>
        </div>
    </HomeContent>
  );
}

export default Home;

const HomeContent = styled.div`
max-width: 1182px;
height: 100vh;
margin: 0 auto;
display: flex;
align-items: center;
.text_content{
    display: flex;
    flex-direction: column;
    align-items: end;

    h1{
        font-size: 96px;
        white-space: nowrap;
    }
}
`;


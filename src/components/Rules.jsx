import styled from "styled-components";

const Rules = () => {
  return (
    <RulesSection>
        <h2>How to play dice game</h2>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
    </RulesSection>
  );
}

export default Rules;

const RulesSection = styled.div`
background-color: #FBF1F1;
padding: 10px;
max-width: 794px;
margin: 0 auto;
margin-top: 32px;
h2{
    font-size: 24px;
}

`;
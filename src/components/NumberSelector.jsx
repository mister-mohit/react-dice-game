import { useState } from 'react';
import styled from 'styled-components';

function NumberSelector({selected, setSelected, error, setError}) {
    
    const arrNumbers = [1, 2, 3, 4, 5, 6] ;

    function handleSelection(value){
        setSelected(value);
        setError("");
    }

    return (
        <NumberContainer>
            <p>{error}</p>
            <div className="box">
                {arrNumbers.map((value,index) => (
                    <Box key={index} onClick={() => handleSelection(value)} isSelected={value == selected}>{value}</Box>
                ))}
            </div>
            <p>Select Number</p>
        </NumberContainer>
    )
}

export default NumberSelector;

const NumberContainer = styled.div`

display: flex;
gap: 30px;
flex-direction: column;
align-items: end;

.box{
    display: flex;
    gap: 24px;
}

p{
    font-size: 24px;
    font-weight: bold;
}
`;

const Box = styled.div`
width: 72px;
height: 72px;
font-size: 24px;
font-weight: bold;
border: 1px solid black;
display: grid;
place-items: center;
background-color: ${(props) => props.isSelected ? "black" : "white"};
color: ${(props) => !props.isSelected ? "black" : "white"};
`;
import styled from 'styled-components';

export const Button = styled.button`
width: 220px;
color: white;
padding: 10px;
border-radius: 5px;
border: 2px solid transparent;
background-color: black;

&:hover{
  color: black;
  border: 2px solid black;
  background-color: white
}
`;

export const OutlineButton = styled(Button)`
color: black;
border: 2px solid black;
background-color: white;

&:hover{
    color: white;
    border: 2px solid transparent;
    background-color: black;
}
`;
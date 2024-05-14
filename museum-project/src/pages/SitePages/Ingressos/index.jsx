import { Button } from "primereact/button";
import styled from "styled-components";

const Ingressos = () => {
    
    const ButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: auto;
    & div {
        display: flex;
        align-content: center;
        justify-content: center;
        color: white; 
        width: 250px;
        height: 60px;
    }
    
    & button{
        background-color: black;
        color: white;
        font-size: 18px;        
    }
`;
        

  return (
    <ButtonContainer>
    <div>
        <Button label="Adquira seu Ingresso" />
    </div>
    </ButtonContainer>
  );
};

export default Ingressos;

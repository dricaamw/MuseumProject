import styled from "styled-components";

const ButtonContainer = styled.button`
display: flex;
align-items: center;
justify-content: center;
margin: auto;
    & div {
        display: flex;
        align-content: center;
        justify-content: center;
        background-color: black;
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

const Ingressos = () => {
  return (
    <ButtonContainer>
        <div>
            <button>Adquira seu ingresso</button>
        </div>
        
    </ButtonContainer>
  );
};

export default Ingressos;

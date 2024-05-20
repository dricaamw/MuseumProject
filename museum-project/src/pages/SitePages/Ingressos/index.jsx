import { Button } from "primereact/button";
import styled from "styled-components";
import "primeicons/primeicons.css";

const ButtonContainer = styled.div`

text-align: center;
background-color: #b29885;
width: 200px;

    /* display: flex;
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

    & button {
      background-color: black;
      color: white;
      font-size: 18px;
    } */
  `;
  
const Ingressos = () => {  

  return (
    <ButtonContainer>
      <h1>Ingressos</h1>
    </ButtonContainer>
    // <ButtonContainer>
    //   <div>
    //     <Button label="Adquira seu Ingresso" />
    //   </div>
    // </ButtonContainer>
  );
};

export default Ingressos;

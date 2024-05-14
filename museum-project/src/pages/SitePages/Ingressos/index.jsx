import styled from "styled-components";
import "primeicons/primeicons.css";

const IngressoContainer = styled.div`
  width: 260px;
  background-color: #f6d581;
  padding: 15px;
  display: flex;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  & button {
    background-color: #f6d581;
    font-size: 1.2em;
    font-weight: bolder;
  }
  & i {
    position: absolute;
    top: 35%;
    left: 87%;
  }
`;

const Ingressos = () => {
  return (
    <IngressoContainer>
      <button>Reserve seu ingresso</button>
      <i
        className="pi pi-arrow-right"
        style={{ fontSize: "1.2rem", color: "black" }}
      ></i>
    </IngressoContainer>
  );
};

export default Ingressos;

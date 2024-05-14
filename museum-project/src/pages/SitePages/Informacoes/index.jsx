import styled from "styled-components";

const InformacoesContainer = styled.div`
  width: 600px;
  background-color: #ffffff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1%;
  left: 15%;
  transform: translate(40%, 40%);
  & p{
    margin-bottom: 30px;
    text-align: justify;
  }
  & div{
    text-align: left;
    margin-bottom: 20px;
    & h3{
        margin-bottom: 10px;
        letter-spacing: 1px
    }
  }
`;

const Informacoes = () => {
  return (
    <InformacoesContainer>
        <p>O Museu de Arte Moderna é um equipamento cultural dedicado à exposição, interpretação, debate e disseminação da cultura.</p>
      <div>        
        <h3>FUNCIONAMENTO</h3>
        <p>Aberto de terça-feira a domingo das 12h às 17h.<br/> Entrada gratuita.</p>
      </div>
      <div>
        <h3>LOCALIZAÇÃO</h3>
        <p>Av Dom Luis 1000, Aldeota, Fortaleza/CE - CEP: 60000-000</p>
      </div>
      <div>
        <h3>CONTATOS</h3>
        <p>
          (85) 99999-9999 <br />
          (85) 3030-3030 <br />
          museu@museudeartemoderna.com.br
        </p>
      </div>
    </InformacoesContainer>
  );
};

export default Informacoes;

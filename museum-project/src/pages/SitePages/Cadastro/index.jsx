import styled from "styled-components";

const FormContainer = styled.form`
  width: 400px;
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-35%, -38%);
  & h2 {
    margin-bottom: 20px;
  }
  & div.dados {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 10px;
    & input.box {
      width: 300px;
      height: 30px;
      border: 2px solid #888484;
    }
    & label {
      font-size: 14px;
    }
  }
  & div.itens {
    width: 300px;
    display: flex;
    gap: 10px;
    font-size: 14px;
    & .selecao {
      width: 145px;
      height: 30px;
      border: 2px solid #888484;
    }
    & input {
      width: 145px;
      height: 30px;
      border: 2px solid #888484;
    }
  }
  & button{
    width: 300px;
    height: 30px;
    margin-top: 10px;
    background-color: #f6d581;
  }
`;

const Cadastro = () => {
  return (
    <FormContainer>
      <h2>Seja bem-vindo(a)!</h2>
      <div className="dados">
        <label htmlFor="nome">Nome do visitante: </label>
        <input className="box" type="text" id="nome" required />
      </div>
      <div className="dados">
        <label htmlFor="cpf">CPF: </label>
        <input className="box" type="number" id="cpf" required />
      </div>
      <div className="dados">
        <label htmlFor="profissao">Profissão: </label>
        <input className="box" type="text" id="profissao" required />
      </div>
      <div className="itens">
        <div>
          <label htmlFor="genero">Gênero: </label>
          <select className="selecao" required name="genero">
            <option disabled selected>
              --- selecione ---
            </option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="naoInformar">Prefiro não informar</option>
          </select>
        </div>
        <div className="dados">
          <label htmlFor="idade">Idade: </label>
          <input className="" type="number" id="idade" required />
        </div>
      </div>
      <div className="itens">
        <div>
          <label htmlFor="cidade">Cidade: </label>
          <select className="selecao" required name="cidade">
            <option disabled selected>
              --- selecione ---
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="estado">Estado: </label>
          <select className="selecao" name="estado">
            <option disabled selected>
              --- selecione ---
            </option>
          </select>
        </div>
      </div>
      <button type="submit">Enviar</button>
    </FormContainer>
  );
};

export default Cadastro;

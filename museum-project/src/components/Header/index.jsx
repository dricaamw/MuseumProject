import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #0000009f;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 60px;

  & nav {
    display: flex;
    gap: 150px;
    align-items: center;
    & img{
    max-width: 300px;
    }
    & ul {
      display: flex;
      gap: 50px;
      font-size: 20px;
      & a {
        color: white;
        display: inline-block;
        line-height: 46px;
        padding: 0 16px;
        position: relative;
        &:hover,
        &.active {
          color: #f6d581;
        }
        &::after {
          content: "";
          width: 0;
          height: 4px;
          background-color: #f6d581;
          border-radius: 2px;
          position: absolute;
          bottom: 0;
          left: 50%;
          transition-duration: 200ms;
        }
        &.active::after {
          width: 100%;
          left: 0;
        }
      }
    }
  } 
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <nav>
          <img src="../images/logoMuseu.png" alt="logo museu" />
          <ul>
            <li className="cadastro">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/cadastro"}>Cadastro</NavLink>
            </li>
            <li>
              <NavLink to={"/ingressos"}>Ingressos</NavLink>
            </li>
            <li>
              <NavLink to={"/informacoes"}>Informações</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;

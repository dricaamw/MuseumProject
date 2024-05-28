import styled from "styled-components";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Link } from 'react-router-dom';

const MenuBarContainer = styled.header`
  & div.p-menubar {
    background-color: #0000009e;
    border: 0;
    border-radius: 0;
    width: 100vw;
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    top: 0;
    z-index: 0;
  }
  & img {
    position: relative;
    bottom: 20px;
    left: 20px;
    z-index: 1;
  }

  & Button {
    color: #ffffffb2;
    font-size: 12px;
    margin-right: 30px;
    margin-left: 0px;
    text-decoration: none;
    background-color: #80808043;
    border: 0;
    border-radius: 0;
    position: relative;
    left: 1150px;
    bottom: 110px;    
  }
  & Button:active{
      border-color: transparent;
    }
`;

const Header = () => {

  const itens = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      url: '/'
    },
    {
      label: "Cadastro",
      icon: "pi pi-user-plus",
      url: "/cadastro",
    },
    {
      label: "Ingressos",
      icon: "pi pi-ticket",
      url: "/ingressos",
    },
    {
      label: "Informações",
      icon: "pi pi-info-circle",
      url: "/informações",
    },
  ]

const start = <a href="/"><img alt="logo" src="../images/logoMuseu.png" width={300} /> </a>

  return (
    <MenuBarContainer>
      <img src="../images/logoMuseu.png" alt="Logo" width={300} />
      <Menubar className="flex justify-content-around p-6 m-0" model={itens} />
      <Link to="/login">
        <Button label="Login" />
      </Link>
    </MenuBarContainer>
  );
};
export default Header;

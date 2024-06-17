import styled from "styled-components";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";

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

  /* & Button {
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
  } */
  /* & Button:active{
      border-color: transparent;
    } */
  Button {
    color: #ffffffb2;
    font-size: 12px;
    background-color: #80808043;
  }
`;

const Header = () => {
  const itens = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => paraOnde(""),
    },
    {
      label: "Cadastro",
      icon: "pi pi-user-plus",
      command: () => paraOnde("cadastro"),
    },
    {
      label: "Ingressos",
      icon: "pi pi-ticket",
      command: () => paraOnde("ingressos"),
    },
    {
      label: "Informações",
      icon: "pi pi-info-circle",
      command: () => paraOnde("informacoes"),
    },
  ];
  
    const navigate = useNavigate();
    const paraOnde = (caminho) => navigate(`/${caminho}`);

  const start = (
    <Link to="/">
      <img alt="logo" src="../images/logoMuseu.png" className="w-19rem mt-1" />
    </Link>
  );

  return (
    <MenuBarContainer>
      <Menubar
        className="flex justify-content-around m-0"
        model={itens}
        start={start}
      />
      <Link to="/login">
        <Button label="Login" />
      </Link>
    </MenuBarContainer>
  );
};
export default Header;

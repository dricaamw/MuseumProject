import styled from "styled-components";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";

const MenuBarContainer = styled.header`
  & div.p-menubar {
    background-color: #0000009e;
    border: 0;
    border-radius: 0;
    font-size: 18px;
    font-weight: bold;
  }
  & img {
    position: relative;
    bottom: 20px;
    left: 20px;
    z-index: 1;
  }

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

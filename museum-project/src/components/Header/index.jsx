import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Menubar } from 'primereact/menubar';

const MenuBarContainer = styled.header`

  & div.p-menubar{
    background-color: #00000081;
    border: 0;
    border-radius: 0;
    & .logo{
      border-style: none;
    }
  }
`

const Header = () => {

  const itens = [
    {
      label: 'Cadastro',
      icon: 'pi pi-home',
      url: '/cadastro'
    },
    {
      label: 'Ingressos',
      icon: 'pi pi-star',
      url: '/ingressos'
    },
    {
      label: 'Informações',
      icon: 'pi pi-envelope',
      url: '/informacoes'
    }
  ]

const start = <a href="/"><img alt="logo" src="../images/logoMuseu.png" width={300} /> </a>

  return (
    <MenuBarContainer>
        <Menubar start={start} model={itens}/>
    </MenuBarContainer>
  );
};

export default Header;

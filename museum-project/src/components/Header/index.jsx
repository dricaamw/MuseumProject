
import styled from "styled-components";
import { Menubar } from 'primereact/menubar';
import 'primeicons/primeicons.css';

const MenuBarContainer = styled.header`
    
    & div.p-menubar{
      background-color: #0000009e;
      border: 0;
      border-radius: 0;
      width: 100vw;
      font-size: 18px;
      font-weight: bold;
    }
    `

const Header = () => {

  const itens = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      url: '/cadastro'
    },
    {
      label: 'Cadastro',
      icon: 'pi pi-user-plus',
      url: '/cadastro'
    },
    {
      label: 'Ingressos',
      icon: 'pi pi-ticket',
      url: '/ingressos'
    },
    {
      label: 'Informações',
      icon: 'pi pi-info-circle',
      url: '/informações'
    },
  ]

const start = <a href="/"><img alt="logo" src="../images/logoMuseu.png" width={300} /> </a>

  return (
    <MenuBarContainer>
        <Menubar className="flex justify-content-evenly" start={start} model={itens}/>
    </MenuBarContainer>
  );
};
export default Header;

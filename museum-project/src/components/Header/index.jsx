import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Menubar } from 'primereact/menubar';

// const HeaderContainer = styled.header`
//   background-color: #00000086;
//   color: white;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 7px 60px;
  
//   & *{
//   border: 0;
//   outline: 0;
//   text-decoration: none;
//   line-height: none;
//   list-style: none;
//   box-sizing: border-box;
//   font-family: Arial, Helvetica, sans-serif;
//   }

//   & nav {
//     display: flex;
//     gap: 150px;
//     align-items: center;
//     & img{
//     max-width: 300px;
//     }
//     & ul {
//       display: flex;
//       gap: 50px;
//       font-size: 20px;
//       & a {
//         color: white;
//         display: inline-block;
//         line-height: 46px;
//         padding: 0 16px;
//         position: relative;
//         &:hover,
//         &.active {
//           color: #FBE7B3;
//         }
//         &::after {
//           content: "";
//           width: 0;
//           height: 4px;
//           background-color: #FBE7B3;
//           border-radius: 2px;
//           position: absolute;
//           bottom: 0;
//           left: 50%;
//           transition-duration: 200ms;
//         }
//         &.active::after {
//           width: 100%;
//           left: 0;
//         }
//       }
//     }
//   } 
// `;
  const MenuBarContainer = styled.header`
    
    & div.p-menubar{
      background-color: #00000081;
      border: 0;
      border-radius: 0;
    }
    `

const Header = () => {
  
  const itens = [
    {
      label: 'Cadastro',
      icon: 'pi pi-home',
      url: '/'
    },
    {
      label: 'Ingressos',
      icon: 'pi pi-star',
      url: ''
    },
    {
      label: 'Informações',
      icon: 'pi pi-envelope',
      url: ''
    }
  ]



  const start = <img alt="logo" src="../images/logoMuseu.png" width={300} />

  return (
    <MenuBarContainer>
        <Menubar start={start} model={itens}/>
    </MenuBarContainer>

    // <HeaderContainer>
      // <div>
      //   <nav>
      //     <img src="../images/logoMuseu.png" alt="logo museu" />
      //     <ul>
      //       <li>
      //         <NavLink to={"/"}>Ingressos</NavLink>
      //       </li>
      //       <li>
      //         <NavLink to={"/eventos"}>Eventos</NavLink>
      //       </li>
      //       <li>
      //         <NavLink to={"/informacoes"}>Informações</NavLink>
      //       </li>
      //     </ul>
      //   </nav>
      // </div>
    // </HeaderContainer>
  );
};

export default Header;

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from 'primereact/button';
import { Card } from "primereact/card";

// const NotFoundContainer = styled.div`

//     width: 100%;    

//     display: flex;
//     justify-content: center;

//     text-align: center;
//     & div.card{
//         width: 600px;
//         height: 400px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         flex-direction: column;

//         background-color: var(--blue-500) ;
//         border-radius: 15%;
//         & div.erro{
//             & h4{
//                 padding-bottom: 15px;
//             }

//             & h1{
//             }
        
//             & p{
//                 padding: 0 0 3px 0;
//             }
//         }
//         & div.erro:after{
//             content: "";
//             position: absolute;
//             left: 450px;
//             right: 450px;

//             height: 1px;
//             background-color: #FFFFFF;
//         }
    
    
//         & a{
//             color: black;
//             padding: 10px 12px;
//         }
//     }

// `
const ButtonContainer = styled.div`
    & Button{
        background-color: black;
    }
`

const NotFound = () => {

    const footer = (
        <ButtonContainer>
            <Button label="Página Inicial aa" icon="pi pi-refresh" onClick={() =>  window.open('/', '_self')} />
        </ButtonContainer>
    )

    return ( 
        // <NotFoundContainer>
        <div className="flex align-items-center justify-content-center m-6">

            <Card title='Erro 404' subTitle='Página Não Encontrada! b' footer={footer} className='w-5 flex align-items-center justify-content-center text-center'/>
            
        </div>
        
        // </NotFoundContainer>
     );
}
 
export default NotFound;
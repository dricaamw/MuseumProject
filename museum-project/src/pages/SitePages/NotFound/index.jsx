import styled from "styled-components";
import { Button } from 'primereact/button';
import { Card } from "primereact/card";

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
        <div className="flex align-items-center justify-content-center m-6">

            <Card title='Erro 404' subTitle='Página Não Encontrada! b' footer={footer} className='w-5 flex align-items-center justify-content-center text-center'/>
            
        </div>
     );
}
 
export default NotFound;
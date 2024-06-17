import styled from "styled-components";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Link } from "react-router-dom";

const NotFoundContainer = styled.div`
  & div .flex {
    background-color: #000000d8;
  }
`;

const ButtonContainer = styled.div``;

const NotFound = () => {
  const footer = (
    <ButtonContainer>
      <Link to="/" replace>
        <Button
          label="Página Inicial"
          icon="pi pi-refresh"
        />
      </Link>
    </ButtonContainer>
  );

  return (
    <NotFoundContainer>
      <div className="flex align-items-center justify-content-center m-6">
        <Card
          title="Erro 404"
          subTitle="Página Não Encontrada!"
          footer={footer}
          className="w-5 flex align-items-center justify-content-center text-center"
        />
      </div>
    </NotFoundContainer>
  );
};

export default NotFound;

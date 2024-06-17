import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AdmHeader = () => {
  const HeaderContainer = styled.header`
    img.logo {
        cursor: pointer;
    }
  `;

  const navigate = useNavigate();
  const ondeIr = (local) => navigate(`/${local}`);

  return (
    <HeaderContainer>
      <img
        className="logo"
        src="images/logoMuseu.png"
        onClick={() => {
          ondeIr("");
        }}
      />
    </HeaderContainer>
  );
};

export default AdmHeader;

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AdmHeader = () => {
  const HeaderContainer = styled.header`

    > div{
      height: 60px;
      width: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 40px;
      transition-duration: 220ms;
      cursor: pointer;

      & img.logo {
        height: 60%;
      }
    }

    > div:hover {
      background-color: #80808043;
    }


  `;

  const navigate = useNavigate();
  const ondeIr = (local) => navigate(`/${local}`);

  return (
    <HeaderContainer>
      <div className="flex justify-content-center align-items-center ">
        <img
          className="logo"
          src="images/SimpleLogoEye.png"
          onClick={() => {
            ondeIr("");
          }}
        />
      </div>
    </HeaderContainer>
  );
};

export default AdmHeader;

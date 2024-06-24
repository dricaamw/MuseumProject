import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AdmHeader = () => {
    const HeaderContainer = styled.header`
        align-items: center;
        justify-content: space-around;
        height: 100px;
        background-color: #0000009e;

        & div.logo {
            height: 60px;
            width: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 40px;
            transition-duration: 220ms;
            cursor: pointer;

            & img {
                height: 60%;
            }
        }

        & div.logo:hover {
            background-color: #80808043;
        }
    `;

    const navigate = useNavigate();
    const ondeIr = (local) => navigate(`/${local}`);

    return (
        <HeaderContainer className="flex">
            <div className="logo flex justify-content-center align-items-center">
                <img
                    className="logo"
                    src="images/SimpleLogoEye.png"
                    onClick={() => {
                        ondeIr("");
                    }}
                />
            </div>

            <div>
                <h4>Filtro</h4>
                <ul name="Filtro">
                    <li>Gênero</li>
                    <li>Cidade</li>
                    <li>Estado</li>

                    {/* botão de "não repetir pessoas" no Pannel */}
                </ul>
            </div>
        </HeaderContainer>
    );
};

export default AdmHeader;

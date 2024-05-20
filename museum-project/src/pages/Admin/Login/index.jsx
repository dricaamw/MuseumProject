import styled from "styled-components";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { useState } from "react";

const LoginContainer = styled.section`
  & form {
    position: absolute;
    bottom: 140px;
    left: 480px;
  }
  & h3 {
    color: black;
  }
  & input {
    background-color: white;
    color: black;
  }
  & input::placeholder {
    color: black;
  }

  & button {
    background-color: #b29885;
  }
`;

const Login = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <LoginContainer className="h-screen flex justify-content-center align-items-center p-3 md:p-0">
      <form className="w-12 md:w-5 surface-900 p-3 border-round-sm">
        <h3>Login admin</h3>
        <InputText
          type="email"
          className="w-full mb-3"
          placeholder="email@email.com"
        />
        <IconField iconPosition="right" className=" mb-3">
          <InputIcon
            icon="pi pi-user"               
            onClick={() => setVisiblePassword(!visiblePassword)}
            className={`pi ${
              visiblePassword ? "pi-eye" : "pi-eye-slash"
            } cursor-pointer`} style={{ color: "black" }}
          />
          <InputText
            type={visiblePassword ? "text" : "password"}
            className="w-full"
            placeholder="********"
            maxLength={10}
          />
        </IconField>

        <Button type="submit" label="Entrar" className="w-full" />
      </form>
    </LoginContainer>
  );
};

export default Login;

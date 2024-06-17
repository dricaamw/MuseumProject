import { Button } from "primereact/button";
import styled from "styled-components";
import "primeicons/primeicons.css";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { InputMask } from "primereact/inputmask";

const Ingressos = () => {
  const FormContainer = styled.div``;

  return (
    <FormContainer className="flex align-items-center justify-content-center mt-5 mb-5">
      <div className="p-4 shadow-2 border-round-xl w-full lg:w-6 bg-black-alpha-80">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">
            Login
          </div>
        </div>

        <div className="flex flex-column align-items-center">
          <div className="flex flex-column align-items-center w-full mb-5 gap-3">
            <FloatLabel className="w-9 mb-3">
              <label htmlFor="email" className="text-900 font-medium">
                Email
              </label>
              <InputText
                id="email"
                type="text"
                placeholder="Insira seu Email"
                className="w-12"
              />
            </FloatLabel>

            <FloatLabel className="w-9">
              <label htmlFor="email" className="text-900 font-medium">
                Senha
              </label>
              <InputText
                id="email"
                type="password"
                placeholder="Insira sua senha"
                className="w-12"
              />
            </FloatLabel>
            
          </div>
          <Button
            label="Tire seu Ingresso!"
            icon="pi pi-user"
            className="w-6"
            type="submit"
          />
        </div>
      </div>
    </FormContainer>
  );
};

export default Ingressos;
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import styled from "styled-components";
import { useState } from "react";
import { FloatLabel } from "primereact/floatlabel";
import { Dropdown } from "primereact/dropdown";

const FormContainer = styled.form``;

const Cadastro = () => {
  const [genderSelected, setGenderSelected] = useState(null);
  const genders = [
    { name: "Masculino", code: "MASC" },
    { name: "Feminino", code: "FEMI" },
    { name: "Outro", code: "OUTR" },
    { name: "Prefiro não Informar", code: "PNIN" },
  ];

  const [checked, setChecked] = useState(false);

  return (
    <FormContainer className="flex align-items-center justify-content-center mt-5">
      <div className="p-4 shadow-2 border-round-xl w-full lg:w-6 bg-black-alpha-80">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">Faça seu Cadastro</div>
          <span className="text-600 font-medium line-height-3">Já tem um cadastro?</span>
          <a href="ingresso" className="font-medium no-underline ml-2 text-blue-500 cursor-pointer ">
            Retire seu ingresso!
          </a>
        </div>

        <div>
          <div className="flex justify-content-between align-items-center mb-3 gap-3">
            <FloatLabel className="w-12">
              <label htmlFor="email" className="block text-900 font-medium">
                Nome Completo
              </label>
              <InputText id="nomeCompleto" type="text" placeholder="Insira seu nome" className="w-12" />
            </FloatLabel>

            <FloatLabel className="w-12">
              <label htmlFor="email" className="block text-900 font-medium">
                Email
              </label>
              <InputText id="email" type="text" placeholder="Endereço de Email" className="w-12" />
            </FloatLabel>
          </div>

          <label htmlFor="password" className="block text-900 font-medium">
            Senha
          </label>
          <InputText id="password" type="password" placeholder="senha" className="w-full mb-5" />

          <FloatLabel className="w-12">
            <Dropdown inputId="st-gender" value={genderSelected} onChange={(e) => setGenderSelected(e.value)} options={genders} optionLabel="name" placeholder="Selecione um Gênero" className="w-20rem" />
            <label htmlFor="st-gender">Gênero</label>
          </FloatLabel>

          <div className="flex align-items-center justify-content-between mb-6">
            <div className="flex align-items-center"></div>
            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
          </div>

          <Button label="Sign In" icon="pi pi-user" className="w-full" />
        </div>
      </div>
    </FormContainer>
  );
};

export default Cadastro;

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { FloatLabel } from "primereact/floatlabel";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import {
  locale,
  addLocale,
  updateLocaleOption,
  updateLocaleOptions,
  localeOption,
  localeOptions,
} from "primereact/api";
import axios from "axios";

const Cadastro = () => {
  const FormContainer = styled.form``;

  const [date, setDate] = useState(null);
  addLocale("pt-br", {
    firstDayOfWeek: 1,
    dayNames: [
      "domingo",
      "segunda-feira",
      "terça-feira",
      "quarta-feira",
      "quinta-feira",
      "sexta-feira",
      "sábado",
    ],
    dayNamesShort: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
    dayNamesMin: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"],
    monthNames: [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ],
    monthNamesShort: [
      "jan",
      "fev",
      "mar",
      "abr",
      "mai",
      "jun",
      "jul",
      "ago",
      "set",
      "out",
      "nov",
      "dez",
    ],
    today: "Hoje",
    clear: "Limpar",
  });

  const [genderSelected, setGenderSelected] = useState(null);
  const genders = [
    { name: "Masculino", code: "MASC" },
    { name: "Feminino", code: "FEMI" },
    { name: "Outro", code: "OUTR" },
    { name: "Prefiro não Informar", code: "PNIN" },
  ];
  const [estados, setEstados] = useState([]);
  const getEstado = async () => {
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios`)
    setEstados([...response.data.map((e) => e.microrregiao.mesorregiao.UF.nome)]);
  };
  useEffect(() => {
    getEstado();
  }, [])
  console.log(estados && estados);
  
  const [estadoSelected, setEstadoSelected] = useState(null);

  return (
    <FormContainer className="flex align-items-center justify-content-center mt-5">
      <div className="p-4 shadow-2 border-round-xl w-full lg:w-6 bg-black-alpha-80">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">
            Faça seu Cadastro
          </div>
          <span className="text-600 font-medium line-height-3">
            Já tem um cadastro?
          </span>
          <a
            href="ingresso"
            className="font-medium no-underline ml-2 text-blue-500 cursor-pointer "
          >
            Retire seu ingresso!
          </a>
        </div>

        <div>
          <div className="flex justify-content-between align-items-center mb-3 gap-3">
            <FloatLabel className="w-12">
              <label htmlFor="email" className="text-900 font-medium">
                Nome Completo
              </label>
              <InputText
                id="nomeCompleto"
                type="text"
                placeholder="Insira seu nome"
                className="w-12"
              />
            </FloatLabel>

            <FloatLabel className="w-12">
              <label htmlFor="email" className="text-900 font-medium">
                Email
              </label>
              <InputText
                id="email"
                type="text"
                placeholder="Endereço de Email"
                className="w-12"
              />
            </FloatLabel>
          </div>

          <FloatLabel className="w-12">
            <InputText
              id="job"
              type="text"
              placeholder="Insira sua Profissão"
              className="w-full"
            />
            <label htmlFor="job" className="text-900 font-medium">
              Profissão
            </label>
          </FloatLabel>

          <FloatLabel className="w-12">
            <Dropdown
              id="st-gender"
              value={genderSelected}
              onChange={(e) => setGenderSelected(e.value)}
              options={genders}
              optionLabel="name"
              placeholder="Selecione um Gênero"
              className="w-20rem"
            />
            <label htmlFor="st-gender" className="text-900 font-medium">
              Gênero
            </label>
          </FloatLabel>

          <FloatLabel className="w-12">
            <Calendar
              id="dataNascimento"
              value={date}
              onChange={(e) => setDate(e.value)}
              dateFormat="dd/mm/yy"
              locale="pt-br"
              showButtonBar
              showIcon
            />
            <label htmlFor="dataNascimento"></label>
          </FloatLabel>

          <FloatLabel className="w-12">
            <Dropdown
              id="estado"
              value={estadoSelected}
              onChange={(e) => setEstadoSelected(e.value)}
              options={estados}
              placeholder="Selecione um Estado"
              className="w-20rem"
            />
            <label htmlFor="estado"></label>
          </FloatLabel>

          <div className="flex align-items-center justify-content-between mb-6">
            <div className="flex align-items-center"></div>
            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">
              Forgot your password?
            </a>
          </div>

          <Button label="Sign In" icon="pi pi-user" className="w-full" />
        </div>
      </div>
    </FormContainer>
  );
};

export default Cadastro;

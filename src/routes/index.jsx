import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import Home from "../pages/SitePages/Home";
import Cadastro from "../pages/SitePages/Cadastro";
import Ingressos from "../pages/SitePages/Ingressos";
import Informacoes from "../pages/SitePages/Informacoes";
import Login from "../pages/Admin/Login";
import NotFound from "../pages/SitePages/NotFound";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/ingressos" element={<Ingressos />} />
            <Route path="/informacoes" element={<Informacoes />} />
            <Route path="/login" element={<Login />} />
            <Route path={"*"} element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;

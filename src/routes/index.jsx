import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import AdmLayout from "../layout/AdmLayout"
import Home from "../pages/SitePages/Home";
import Cadastro from "../pages/SitePages/Cadastro";
import Ingressos from "../pages/SitePages/Ingressos";
import Informacoes from "../pages/SitePages/Informacoes";
import Login from "../pages/Admin/Login";
import NotFound from "../pages/SitePages/NotFound";
import AdmPannel from "../pages/Admin/AdmPannel"

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

          <Route path="/" element={<AdmLayout />}>
            <Route path='/adm-pannel' element={<AdmPannel />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;

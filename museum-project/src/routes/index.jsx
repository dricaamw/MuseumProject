import Informacoes from "../pages/SitePages/Informacoes";
import Cadastro from "../pages/SitePages/Cadastro";
import Ingressos from "../pages/SitePages/Ingressos";
import NotFound from "../pages/SitePages/NotFound";
import PageLayout from "../layout/PageLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/SitePages/Home";

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
                        <Route path={"*"} element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>         
        </>
     );
}
 
export default Paths;
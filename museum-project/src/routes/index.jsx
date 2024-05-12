import Informacoes from "../pages/SitePages/Informacoes";
import Ingressos from "../pages/SitePages/Ingressos";
import Eventos from "../pages/SitePages/Eventos";
import NotFound from "../pages/SitePages/NotFound";
import PageLayout from "../layout/PageLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Paths = () => {
    return ( 
        <>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route index element={<Ingressos />} />
                        <Route path="/eventos" element={<Eventos />} />
                        <Route path="/informacoes" element={<Informacoes />} />
                    </Route>
                    <Route path={"*"} element={<NotFound />} />
                </Routes>
            </BrowserRouter>         
        </>
     );
}
 
export default Paths;
import { Outlet } from "react-router-dom";
import AdmHeader from "../../components/AdmHeader";
import Footer from "../../components/Footer";

const PageLayout = () => {
    return ( 
        <>
        <AdmHeader />
        <Outlet />
        <Footer />
        </>
     );
}
 
export default PageLayout;

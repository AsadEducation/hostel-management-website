import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared-component/navbar/Navbar";
import Footer from "../shared-component/footer/Footer";


const RootLayout = () => {

    const { pathname } = useLocation();

    // console.log(pathname);

    const authPage = pathname.includes('login') || pathname.includes('register');

    return (
        <div>

            {!authPage && <Navbar />}

            <Outlet />

            {!authPage && <Footer/>}

        </div>
    );
};

export default RootLayout;
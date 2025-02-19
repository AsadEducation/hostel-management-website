import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared-component/navbar/Navbar";
import Footer from "../shared-component/footer/Footer";


const RootLayout = () => {

    const { pathname } = useLocation();

    // console.log(pathname);

    const authPage = pathname.includes('login') || pathname.includes('register');
    const home = pathname.includes('home'); console.log('is in home', home);

    return (
        <div>

            {!authPage && <Navbar />}
            {/*  */}

            <div className={`pt-[4vw] ${!home && 'w-11/12 mx-auto'}`} ><Outlet /></div>

            {!authPage && <Footer />}

        </div>
    );
};

export default RootLayout;
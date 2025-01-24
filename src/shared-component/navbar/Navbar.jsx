import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo/hostel-logo.jpg'
import { CgBell } from "react-icons/cg";


const Navbar = () => {



    const navOptions = <>

        <li><NavLink to={`/home`} >Home</NavLink></li>
        <li><NavLink to={`/meals`} >Meals</NavLink></li>
        <li><NavLink to={`/upcoming-meals`} >Upcoming Meals</NavLink></li>


    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                {/* logo with website name  */}
                <div className="flex items-center">
                    <img className="h-15 rounded-2xl" src={logo} alt="" />
                    <Link className="btn btn-ghost text-xl">Chill Hostel</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <CgBell className="text-2xl" />
                <button className="btn btn-primary rounded-2xl">Join Us</button>
            </div>
        </div>
    );
};

export default Navbar;
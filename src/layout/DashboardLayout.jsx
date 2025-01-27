import { CgGift, CgProfile } from "react-icons/cg";
import { FaBurger, FaPaypal } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaHome } from "react-icons/fa";


const DashboardLayout = () => {

    const isAdmin = false;
    const { user } = useAuth();

    return (
        <div className='flex min-h-screen'>

            {/* dashboard navigation sidebar  */}

            <div className='w-[20%] bg-[#D1A054]'>

                {/* navlinks in sidebar for routing */}

                <ul className="menu space-y-8 mt-8 lg:mt-12 w-[70%] mx-auto">



                    {
                        isAdmin ? <>

                            {/* admin links  */}

                            {/* <li><NavLink to={`/dashboard/admin-home`}><CgHome />Admin Home</NavLink></li>
                            <li><NavLink to={`/dashboard/add-items`}><FaUtensilSpoon />Add Items</NavLink></li>
                            <li><NavLink to={`/dashboard/manage-items`}><FaList />Manage Items</NavLink></li>
                            <li><NavLink to={`/dashboard/manage-booking`}><FaBook />Manage Bookings</NavLink></li>
                            <li><NavLink to={`/dashboard/all-users`}><FaPeopleGroup />All users  ({cart.length})</NavLink></li> */}

                        </>
                            : <>

                                {/* user links  */}

                                <li><NavLink to={`/dashboard/user-profile`}><CgProfile /><span className="hidden md:block">My Profile</span></NavLink></li>
                                <li><NavLink to={`/dashboard/requested-meal`}><FaBurger /><span className="hidden md:block">Requested Meal</span></NavLink></li>
                                <li><NavLink to={`/dashboard/users-review`}><CgGift /><span className="hidden md:block">My Reviews</span></NavLink></li>
                                <li><NavLink to={`/dashboard/payment-history`}><FaPaypal /><span className="hidden md:block">Payment History</span></NavLink></li>
                            </>
                    }


                    <hr />

                    {/* shared links */}


                    <li><NavLink to={`/`}><FaHome />Home</NavLink></li>
                    {/* <li><NavLink to={'/our-menu'}><FaSearch />Menu</NavLink></li>
                    <li><NavLink to={'/our-shop/salad'}><FaShoppingCart />Shop</NavLink></li>
                    <li><NavLink><FaEnvelope />Contact</NavLink></li> */}

                </ul>

            </div>

            {/* dashboard pages  */}

            <div className='w-[78%]'>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashboardLayout;
import React from 'react';
import Faq from '../faq-page/Faq';
import Banner from './Banner';
import FeaturedMeals from './FeaturedMeals';
import Membership from './member-ship-section/Membership';

const Home = () => {
    return (
        <div>
            {/* <h2 className="text-5xl">My Homecoming is coming</h2> */}
            <Banner />
            <div className='w-[92vw] mx-auto'>
                <FeaturedMeals />
                <Membership />
                <Faq />
            </div>
        </div>
    );
};

export default Home;
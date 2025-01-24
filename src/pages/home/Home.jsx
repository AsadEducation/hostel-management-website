import React from 'react';
import Faq from '../faq-page/Faq';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            {/* <h2 className="text-5xl">My Homecoming is coming</h2> */}
            <Banner />
            <Faq />
        </div>
    );
};

export default Home;
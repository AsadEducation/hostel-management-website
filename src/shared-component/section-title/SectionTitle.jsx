import React from 'react';

const SectionTitle = ({ title }) => {
    return (
        <div className='mx-auto text-center w-4/12 mt-8'>
            <h2 className='text-3xl lg:text-4xl uppercase font-semibold py-4 '>{title}</h2>
        </div>
    );
};

export default SectionTitle;
import { useState } from "react";


const Membership = () => {

    const membershipCards = [
        {
            name: "Platinum",
            price: 23,
            features: [
                "High-resolution image generation",
                "Customizable style templates",
                "Batch processing capabilities",
                "AI-driven image enhancements",
                "Seamless cloud integration",
                "Real-time collaboration tools",
                "24/7 customer support",
                "Unlimited storage capacity",
                "Advanced analytics and reporting",
                "Automatic backup and restore",
            ]
        },
        {
            name: "Gold",
            price: 11,
            features: [
                "High-resolution image generation",
                "Customizable style templates",
                "Batch processing capabilities",
                "AI-driven image enhancements",
                "Seamless cloud integration",
                "Real-time collaboration tools",
                "24/7 customer support",
            ]
        },
        {
            name: "Silver",
            price: 9,
            features: [
                "High-resolution image generation",
                "Customizable style templates",
                "Batch processing capabilities",
                "AI-driven image enhancements",
            ]

        },

    ]



    return (
        <div className="space-y-8 lg:space-y-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-center">Premium Membership</h2>
            <div className="grid grid-cols-1  bg-base-100 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto">
                {
                    membershipCards.map((card, index) => {
                        return <div key={index} className="card w-96 flex flex-col bg-base-100 shadow-sm">
                            <div className="card-body">
                                <span className="badge badge-xs badge-warning">Most Popular</span>
                                <div className="flex justify-between">
                                    <h2 className="text-3xl font-bold">{card.name}</h2>
                                    <span className="text-xl">${card.price}/mo</span>
                                </div>
                                <ul className="mt-6 flex flex-col flex-grow gap-2 text-xs">

                                    {/* provided features in the package */}

                                    {
                                        card.features.map((feature, index) => {
                                            return <li key={index}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                <span>{feature}</span>
                                            </li>
                                        })

                                    }

                                    {/* {available-=3} */}


                                    {/* features that are not available */}


                                    {/* <li className="opacity-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="line-through">Seamless cloud integration</span>
                                </li> */}

                                </ul>
                                <div className="mt-6">
                                    <button className="btn btn-primary btn-block">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Membership;
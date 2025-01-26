import { SlLike } from "react-icons/sl";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";
import ReviewSection from "./ReviewSection";


const MealDetails = () => {

    //hooks
    const { data } = useLoaderData();
    const { user, loading } = useAuth();// console.log(user);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    // console.log(data);

    // state 
    const [like, setLike] = useState(data?.reactionCount || 0);

    const { image, name, category, price, _id, details, ingredients, mealType, distributorName, postTime, rating } = data;

    const handleLike = async () => {

        const updatedLike = like + 1;
        setLike(updatedLike);

        if (loading) return <span className="loading loading-bars loading-xs"></span>
        if (user) {
            try {

                const res = await axiosPublic.patch(`/meal/like/${_id}`, { reactionCount: like })
                if (res.data) {
                    console.log(res.data);
                    return;
                }

            } catch (error) {

                console.log(error);
            }
        }

        Swal.fire({ title: "Please Login First", icon: 'warning' })

        navigate('/login');

    }

    return (
        <div>

            <div className="max-w-[95vw] min-h-screen lg:flex lg:gap-12 justify-between  items-center mx-auto p-6 bg-white ">
                {/* Food Image */}
                <img
                    src={image}
                    alt={name}
                    className=" lg:w-[40%]  object-cover rounded-md"
                />



                {/* Food Details ---Text Content */}

                <div className='space-y-8'>

                    <h1 className="text-4xl font-bold mt-6 text-green-500">{name}</h1>

                    <p className="text-gray-700">{details}</p>

                    <div className="space-y-3">
                        <p className=" font-semibold text-gray-700">Category: <span className=" text-gray-600 text-sm ml-3">{category}</span></p>

                        <p className=" font-semibold text-gray-700">price: <span className=" text-gray-600 text-sm ml-3">${price}</span>$</p>

                        <p className=" font-semibold text-gray-700">Meal Type: <span className=" text-gray-600 text-sm ml-3">{mealType}</span></p>

                        <p className=" font-semibold text-gray-700">Post Time: <span className=" text-gray-600 text-sm ml-3">{postTime}</span></p>

                        <p className=" font-semibold text-gray-700">Rating: <span className=" text-gray-600 text-sm ml-3">{rating}</span></p>

                        <p className=" font-semibold text-gray-700">Likes: <span className=" text-gray-600 text-sm ml-3">{like}</span></p>

                        {/* <p ><SlLike className="text-2xl text-blue-700" /></p> */}

                    </div>



                    <div className="mt-4">
                        <h2 className="text-2xl font-semibold text-gray-700">Ingredients</h2>
                        <ul className="list-disc list-inside mt-2 space-y-2  text-gray-600">
                            {
                                ingredients.map((ingredient, index) => {
                                    return <li key={index} className="font-medium">{ingredient}</li>
                                })
                            }

                        </ul>
                    </div>

                    {/* Donator Information */}
                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold text-gray-700">Distributor</h2>
                        <div className="flex items-center mt-4">
                            <img
                                src={""}
                                alt={distributorName}
                                className="w-16 h-16 rounded-full object-cover border border-gray-200"
                            />
                            <div className="ml-4">
                                <p className="text-lg font-semibold">{distributorName}</p>
                                <p className="text-gray-600">{ }</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-6">
                        {/* <button onClick={handleRequestFood} className="btn bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-lg">
                        Request Food
                    </button> */}

                        <button onClick={handleLike} className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                            Like Food
                        </button>

                    </div>
                </div>

            </div >

            {/* review section  */}

            <ReviewSection  info={data} />

        </div>
    );
};

export default MealDetails;
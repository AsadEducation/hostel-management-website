import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../shared-component/section-title/SectionTitle";


const AddMeal = () => {


    const {

        register,
        handleSubmit,
        reset

    } = useForm();


    const axiosPublic = useAxiosPublic();


    //retrieving image key from .env file 

    const image_api_key = import.meta.env.VITE_Img_Key;

    const imageBB_Url = `https://api.imgbb.com/1/upload?key=${image_api_key}`

    const onsubmit = async (data) => {

        console.log('form data', data);

        // converting ingredients = " " text into an array 

        data.ingredients = data.ingredients.split(','); console.log(data.ingredients);

        const {
            name,
            category,
            mealType,
            postTime,
            price,
            distributorName,
            distributorEmail,
            ingredients,
            details,
        } = data;


        const uploadedImage = {
            image: data.image[0]
        }

        const res = await axiosPublic.post(imageBB_Url, uploadedImage, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log('response back from imagebb', res);

        const display_url = res.data.data.display_url; console.log('display url ', display_url);

        if (display_url) {

            const mealItem = {
                name,
                details,
                image: display_url,
                category,
                price,
                rating,
                mealType,
                distributorName,
                distributorEmail,
                ingredients,
                postTime,
                rating: 0,
                reactionCount: 0,
        reviews_count:0
            }

            const menuRes = await axiosPublic.post(`/menu`, mealItem);

            // console.log('posted message from server', menuRes.data);

            if (menuRes.data.insertedId) {

                reset()

                Swal.fire({

                    icon: 'success',
                    title: `${data.name} added to the collection successfully`,
                    timer: 1500,
                    showConfirmButton: false

                })
            }

        }
    }

    return (
        <div>
            <SectionTitle title={'Add Food'} />

            <div className="md:w-[90%] mx-auto  mt-8 px-2 lg:px-4 py-4 lg:py-6" >

                <form onSubmit={handleSubmit(onsubmit)} className="bg-white lg:px-8  rounded-lg  lg:max-w-[60vw] mx-auto space-y-6">

                    {/* Meal Name Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">*Meal Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            placeholder="Enter meal name"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Category & Meal Type & post time */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Category Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">*Category</span>
                            </label>
                            <select
                                {...register("category", { required: true })}
                                className="select block select-bordered"
                            >
                                <option disabled defaultValue={"Pick a category"}>Pick a category</option>
                                <option value="dessert">Dessert</option>
                                <option value="salad">Salad</option>
                                <option value="drinks">Drinks</option>
                                <option value="popular">Popular</option>
                                <option value="soup">Soup</option>
                            </select>
                        </div>

                        {/* Meal Type Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">*Meal Type</span>
                            </label>
                            <select
                                {...register("mealType", { required: true })}
                                className="select select-bordered block"
                            >
                                <option disabled defaultValue={"Pick a meal type"}>Pick a meal type</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                            </select>
                        </div>
                        {/* post time input  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">*Post Time</span>
                            </label>
                            <input
                                type="date"
                                {...register("postTime", { required: true })}
                                placeholder=""
                                className="input input-bordered w-full"
                                step="0.01"
                            />
                        </div>
                    </div>

                    {/* Price Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">*Price</span>
                        </label>
                        <input
                            type="number"
                            {...register("price", { required: true })}
                            placeholder="Enter price"
                            className="input input-bordered w-full"
                            step="0.01"
                        />
                    </div>

                    {/* Distributor  Input */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">

                        {/* name  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">*Distributor Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("distributorName", { required: true })}
                                placeholder="Enter distributor name"
                                className="input input-bordered w-full"
                            />
                        </div>
                        {/* email  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">*Distributor Email</span>
                            </label>
                            <input
                                type="email"
                                {...register("distributorEmail", { required: true })}
                                placeholder="ping@pang.com"
                                className="input input-bordered w-full"
                            />
                        </div>

                    </div>
                    {/* text area inputs  */}
                    <div className="lg:flex justify-between space-y-8 gap-4">

                        {/* Ingredients Text Area */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">*Ingredients (Comma Separated)</span>
                            </label>
                            <textarea
                                {...register("ingredients", { required: true })}
                                placeholder="Enter ingredients separated by commas"
                                className="textarea textarea-bordered block min-h-[12vh] lg:w-[400px]"
                            />
                        </div>

                        {/* Recipe Details Text Area */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">*Recipe Details</span>
                            </label>
                            <textarea
                                {...register("details", { required: true })}
                                placeholder="Enter recipe details"
                                className="textarea block textarea-bordered min-h-[12vh] lg:w-[400px]"
                            />
                        </div>
                    </div>

                    {/* Image File Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">*Image</span>
                        </label>
                        <input
                            {...register("image", { required: true })}
                            type="file"
                            className="file-input file-input-bordered w-full"
                        />
                    </div>

                    {/* Submit Button */}
                    <button className="btn btn-primary w-full">
                        Add Meal <FaUtensils className="ml-2" />
                    </button>
                </form>



            </div>
        </div>
    );
};

export default AddMeal;


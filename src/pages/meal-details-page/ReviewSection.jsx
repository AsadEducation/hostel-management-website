import { useRef } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useReviews from "../../Hooks/useReviews";
import Swal from "sweetalert2";

const ReviewSection = ({ info }) => {

    const {
        name,
        image,
        category,
        price,
        mealType,
        _id,
        like
    } = info;

    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { reviews, refetch } = useReviews('review-count');
    const textareaRef = useRef();

    const { reviewCount } = reviews;


    const handleAddReview = () => {

        const userReview = {
            reviewText: textareaRef.current.value,
            meal_name: name,
            meal_id: _id,
            meal_category: category,
            meal_type: mealType,
            user_email: user?.email,
            likes_count: like,
        }
        try {
            axiosPublic.post('/review', userReview)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({ icon: "success", title: "your review added successfully" });
                        textareaRef.current.value = '';
                    }
                    refetch();
                })
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div className="min-h-[50vh] space-y-12 my-12 lg:space-y-16">
            <h2 className="text-3xl lg:text-4xl text-center text-green-500 font-semibold animate-bounce italic"> User Reviews ({reviewCount})</h2>


            <div className="w-[80vw] mx-auto">
                <label htmlFor="OrderNotes" className="sr-only">Order notes</label>

                <div
                    className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                    <textarea
                        id="OrderNotes"
                        className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm p-4"
                        rows="4"
                        placeholder="Please Enter Your review for this food..."
                        ref={textareaRef}
                    ></textarea>

                    <div className="flex items-center justify-end gap-2 bg-white p-3">
                        <button
                            onClick={(e) => {
                                textareaRef.current.value = '';
                            }}
                            type="button"
                            className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
                        >
                            Clear
                        </button>

                        <button
                            onClick={handleAddReview}
                            type="button"
                            className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;
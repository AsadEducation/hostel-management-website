import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

// you have to pass two things here :
// 1. which api you want to call
// 2. do you want to find a 'single' user or all user
// 3.if you don't pass in the hook ,  it will load all the reviews by default 

const useReviews = (apiText, userType) => {

    const axiosPublic = useAxiosPublic();
    const { user, loading } = useAuth();

    const { data: reviews = [], isLoading, refetch } = useQuery({

        queryKey: ['reviews', 'reviews-count'],
        enabled: !loading,
        queryFn: async () => {

            try {

                const endpoint = apiText === 'review-count'
                    ? `/review-count`
                    : (userType === 'single' ? `/reviews?email=${user?.email}` : `/reviews`);

                const res = await axiosPublic.get(endpoint);
                return res.data;

            } catch (error) {
                console.log(error);
            }

        }
    })

    return { reviews, isLoading, refetch }
};

export default useReviews;
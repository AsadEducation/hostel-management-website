import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useReviews = (apiText) => {

    const axiosPublic = useAxiosPublic();

    const { data: reviews = [], isLoading, refetch } = useQuery({

        queryKey: ['reviews', 'reviews-count'],

        queryFn: async () => {

            try {

                const res = await axiosPublic.get(`/${apiText}`)
                console.log(res.data);
                return res.data

            } catch (error) {
                console.log(error);
            }

        }
    })

    return { reviews, isLoading, refetch }
};

export default useReviews;
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


// 1.using undefined  in instead of perameter is safe to use while calling the hook
//2. example : const { meals: data, isLoading, refetch } = useMeal(undefined,undefined,undefined,undefined,sortByLikes,sortByReviewCount); 

const useMeal = (search, category, min, max, sortByLikes, sortByReviewCount) => {

    const axiosPublic = useAxiosPublic();

    const { data: meals = [], isLoading, refetch } = useQuery({

        queryKey: ['meals', search, category, min, max, sortByLikes, sortByReviewCount],

        queryFn: async () => {

            try {

                const res = await axiosPublic.get(`/meals?search=${search}&category=${category}&min=${min}&max=${max}&sortByLikes=${sortByLikes}&sortByReviewCount=${sortByReviewCount}`)
                // console.log(res.data);
                return res.data

            } catch (error) {
                console.log(error);
            }

        }
    })

    return { meals, isLoading, refetch }
};

export default useMeal;
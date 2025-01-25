import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useMeal = (search, category, min, max) => {

    const axiosPublic = useAxiosPublic();

    const { data: meals = [], isLoading ,refetch } = useQuery({

        queryKey: ['meals', search, category, min, max],

        queryFn: async () => {

            try {

                const res = await axiosPublic.get(`/meals?search=${search}&category=${category}&min=${min}&max=${max}`)
                // console.log(res.data);
                return res.data

            } catch (error) {
                console.log(error);
            }

        }
    })

    return { meals, isLoading ,refetch }
};

export default useMeal;
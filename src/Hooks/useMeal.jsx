import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useMeal = () => {

    const axiosPublic = useAxiosPublic();

    const { data: meals = [] } = useQuery({

        queryKey: ['meals'],

        queryFn: async () => {

            try {

                const res = await axiosPublic.get('/meals')
                // console.log(res.data);
                return res.data

            } catch (error) {
                console.log(error);
            }

        }
    })

    return { meals }
};

export default useMeal;
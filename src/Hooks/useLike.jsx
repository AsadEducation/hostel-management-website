import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useLike = () => {

    const { data, refetch } = useQuery({
        queryKey: ['like'],
        queryFn: async () => {
            try {

                const res = await useAxiosPublic.patch(`/meal/like/${_id}`, { reactionCount: like })
                return res.data

            } catch (error) {
                console.log(error);
            }
        }
    })

    return data

};

export default useLike;
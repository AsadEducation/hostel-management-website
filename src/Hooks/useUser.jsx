import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

// 3.if you don't pass in the hook , it will load all the user by default 

const useUser = (userType, searchName, searchMail) => {
    const axiosPublic = useAxiosPublic();
    const { user, loading } = useAuth()

    const { data: users = [], isLoading, refetch } = useQuery({

        queryKey: ['users', searchName, searchMail],
        enabled: !loading,
        queryFn: async () => {

            try {
                const endpoint = userType === 'single' ? `/users?email=${user?.email}` : `/users?searchName=${searchName}&searchMail=${searchMail}`;
                const res = await axiosPublic.get(endpoint);
                return res.data;
            } catch (error) {
                console.log(error);
            }

        }
    })

    return { users, isLoading, refetch }
};

export default useUser;
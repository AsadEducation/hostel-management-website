import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


const useAdmin = () => {
    const axiosPublic = useAxiosPublic();
    const { user, loading } = useAuth();

    const { data: isAdmin = [], isLoading: isAdminLoading, refetch } = useQuery({
        queryKey: ['isAdmin'],
        enabled: !loading,
        queryFn: async (req, res) => {
            try {
                const res = await axiosPublic.get(`/user/admin/${user?.email}`)
                return res.data

            } catch (error) {
                console.log(error);
            }
        }
    })

    return { isAdmin, isAdminLoading }
};

export default useAdmin;
import useUser from "./useUser";

const useAdmin = () => {

    const { users, isLoading: isAdminLoading } = useUser('single'); console.log(users[0]);

    const isAdmin = users[0]?.role; console.log('isAdmin', isAdmin);

    return { isAdmin, isAdminLoading };
};

export default useAdmin;
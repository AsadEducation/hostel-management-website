import useUser from "../../Hooks/useUser";
import CustomTable from "../../shared-component/pagination-table/CustomTable";


const ManageUsers = () => {
    const { users: data, isLoading, refetch } = useUser(); console.log(users);

    const info = {
        data,
        refetch,
        isLoading,
    }

    return (
        <CustomTable info={info} />
    );
};

export default ManageUsers;
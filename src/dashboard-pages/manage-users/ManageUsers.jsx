import useUser from "../../Hooks/useUser";
import CustomTable from "../../shared-component/pagination-table/CustomTable";


const ManageUsers = () => {
    const { users: data, refetch } = useUser(); //console.log(data);

    const info = {
        data,
        refetch,
    }

    return (
        <CustomTable info={info} />
    );
};

export default ManageUsers;
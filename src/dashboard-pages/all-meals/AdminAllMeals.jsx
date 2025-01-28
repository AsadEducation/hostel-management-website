import useMeal from "../../Hooks/useMeal";
import CustomTable from "../../shared-component/pagination-table/CustomTable";


const AdminAllMeals = () => {

    const { meals:data, isLoading, refetch } = useMeal(); //console.log(meals);

    const info = {
        data,
        refetch,
        isLoading,
    }

    return <CustomTable
        info={info}
    />
};

export default AdminAllMeals;
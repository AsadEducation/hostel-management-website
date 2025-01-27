import useReviews from "../../Hooks/useReviews";
import CustomTable from "../../shared-component/pagination-table/CustomTable";


const AllReviews = () => {
    const { reviews: data, refetch, isLoading } = useReviews(null, null); console.log(data);

    if (isLoading) return <>Data Loading...</>

    const info = {
        data,
        refetch,
        isLoading,
    }

    return <CustomTable
        info={info}
    />
};

export default AllReviews;
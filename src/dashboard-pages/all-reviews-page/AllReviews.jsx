import useReviews from "../../Hooks/useReviews";
import CustomTable from "../../shared-component/pagination-table/CustomTable";


const AllReviews = () => {
    const { reviews: data, refetch, isLoading } = useReviews(null, null); console.log(data);

    if (isLoading) return <div className="flex w-52 flex-col min-w-screen min-h-screen mx-auto my-auto gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
    </div>

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
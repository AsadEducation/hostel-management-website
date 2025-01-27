import { useState } from "react";
import useReviews from "../../Hooks/useReviews";
import Swal from "sweetalert2";
import { FaEdit, FaTrash } from "react-icons/fa";
import CustomTable from "../../shared-component/pagination-table/CustomTable";

const UsersReview = () => {

    const { reviews:data, refetch , isLoading } = useReviews();

    if(isLoading) return <>Data Loading...</>

    const info = {
        data,
        refetch,
        isLoading,
    }

    return <CustomTable
        info={info}
    />
};

export default UsersReview;
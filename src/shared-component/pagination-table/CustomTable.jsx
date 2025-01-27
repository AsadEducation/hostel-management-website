import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";


const CustomTable = ({ info }) => {

    const { data, refetch } = info;

    if (!data.length) return <div>Data Loading</div>

    //---------------------------------------------------pagination related starts---------------------------------------------------------------------
    //all the things related to calculation of page
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const totalPages = Math.ceil(data.length / 5); // here 5 is records per page . we can make it dynamic later

    //all things related showing data in a page
    const records = data.slice(firstIndex, lastIndex);

    //all things related to page number
    const pageNumbers = [...Array(totalPages + 1).keys()];  // console.log(pageNumbers);
    // ---------------------------------------------------pagination related ends--------------------------------------------------------------------------------------

    const axiosPublic = useAxiosPublic();

    const handleReviewDelete = async (id) => {

        try {
            const res = await axiosPublic.delete(`/review/${id}`)
            if (res.data.deletedCount) {
                refetch();
                Swal.fire({ icon: 'success', title: 'Review Deleted' })
            }
        } catch (error) {
            console.log(error);
        }

    }

    const handleMakeAdmin = async (id) => {
        try {
            const res = await axiosPublic.patch(`/user/admin/${id}`)
            if (res.data.modifiedCount) {
                refetch();
                Swal.fire({ icon: 'success', title: 'Role Updated' })
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="rounded-lg border border-gray-200 w-[90%] mt-12 lg:mt-16 mx-auto">
            <div className="overflow-x-auto rounded-t-lg">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        {
                            // if review user is accessing the table 
                            data[0]?.meal_name && <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Title</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Likes</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Review</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">Actions</th>
                            </tr>
                        }
                        {
                            //if ManageUsers is accessing the table
                            data[0]?.email && <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">Status</th>
                            </tr>
                        }
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {
                            records.map((record, index) => {
                                if (record?.meal_name) {
                                    return (
                                        // if review user is accessing the table 
                                        <tr key={index} >
                                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{record?.meal_name}</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{record?.likes_count}</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{record?.reviewText}</td>
                                            <td className="whitespace-nowrap flex gap-3 px-4 py-2 text-gray-700 ">
                                                <Link state={record} to={`/dashboard/review-edit`} className="btn btn-ghost"><FaEdit className="text-blue-500 " /></Link>
                                                <button onClick={() => handleReviewDelete(record._id)} className="btn btn-ghost"><FaTrash className="text-red-500 " /></button>
                                                <Link to={`/meal-details/${record.meal_id}`} className="btn btn-ghost">view</Link>
                                            </td>
                                        </tr>
                                    )
                                }
                                if (record?.email) {
                                    return (
                                        <tr key={index}>
                                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                                {record?.name}
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                                {record?.email}
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                                {record?.role ? "Admin" : "User"}
                                            </td>
                                            <td className="whitespace-nowrap  px-4 py-2 text-gray-700">
                                                <button
                                                    onClick={() => handleMakeAdmin(record?._id)}
                                                    className="btn "
                                                >
                                                    Make Admin
                                                </button>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                                {record?.subscriptionStatus}
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </table>
            </div>

            {/* pagination component */}

            <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
                <ol className="flex justify-end gap-1 text-xs font-medium">

                    {/* previous button  */}
                    <li>
                        <button
                            onClick={() => {
                                currentPage > 1 ? setCurrentPage(currentPage - 1) : Swal.fire({ icon: 'warning', title: 'No more page forward' })
                            }}
                            className="btn"
                        >
                            <span className="sr-only">Prev Page</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </li>

                    {/* all pages with number 1,2,3... */}

                    {
                        pageNumbers.map((pageNumber, index) => {
                            return <li key={index}>
                                <button
                                    href="#"
                                    className="btn"
                                    onClick={(e) => {
                                        setCurrentPage(pageNumber + 1)
                                    }}
                                >
                                    {pageNumber + 1}
                                </button>
                            </li>
                        })
                    }

                    {/* next button  */}

                    <li>
                        <button
                            onClick={() => {
                                currentPage < totalPages ? setCurrentPage(currentPage + 1) :
                                    Swal.fire({ icon: 'warning', title: 'end of the page' })
                            }}
                            className="btn"
                        >
                            <span className="sr-only">Next Page</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default CustomTable;
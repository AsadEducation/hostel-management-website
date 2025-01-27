import { useState } from "react";
import useReviews from "../../Hooks/useReviews";
import Swal from "sweetalert2";

const UsersReview = () => {

    const { reviews } = useReviews();


    //all the things related to calculation of page
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const totalPages = Math.ceil(reviews.length / 5); // here 5 is records per page . we can make it dynamic later

    //all things related showing data in a page

    const records = reviews.slice(firstIndex, lastIndex);

    //all things related to page number
    const pageNumbers = [...Array(totalPages + 1).keys()];


    console.log(pageNumbers);

    return (
        <div className="rounded-lg border border-gray-200 w-[90%] mt-12 lg:mt-16 mx-auto">
            <div className="overflow-x-auto rounded-t-lg">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Title</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Likes</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Review</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {
                            records.map((review, index) => {
                                return <tr key={index}>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{review?.meal_name}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{review?.likes_count}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{review?.reviewText}</td>

                                </tr>
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
                                        setCurrentPage(pageNumber+1)
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

export default UsersReview;
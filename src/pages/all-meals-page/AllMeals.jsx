import { useState } from "react";
import useMeal from "../../Hooks/useMeal";
import FoodGrid from "../../shared-component/food-grid/FoodGrid";


const AllMeals = () => {

    const [search, setSearch] = useState('');
    const [category, setCategory] = useState("");
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(50);
    const { meals, isLoading } = useMeal(search, category, min, max);

    // console.log(meals);

    if (isLoading) <progress className="progress w-56"></progress>

    return (
        <div className="mt-12 lg:mt-16 space-y-8 lg:space-y-12">

            <h2 className="text-3xl lg:text-4xl text-center font-semibold">All Meals</h2>

            <div className="mx-auto w-11/12 flex items-center justify-between">

                {/* search field  */}

                <div>
                    <label className="input">

                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>

                        <input type="search" onChange={(e) => {

                            const text = e.target.value.toLowerCase();
                            setSearch(text)

                        }} required placeholder="Search" />

                    </label>
                </div>

                {/* filter by category field  */}

                <select

                    onChange={(e) => {
                        setCategory(e.target.value);
                    }}
                    className="select select-bordered"
                >
                    <option value="">All Categories</option>
                    <option value="salad">salad</option>
                    <option value="drinks">drinks</option>
                    <option value="dessert">Desserts</option>
                </select>

                {/* filter by price range  */}

                <div className="flex flex-col lg:flex-row gap-4 items-center">


                    {/* Min Price Input */}
                    <div className="flex items-center gap-2">
                        <label className="text-sm font-medium text-gray-600">Min:</label>
                        <input
                            type="number"
                            placeholder="Min Price"
                            className="input input-bordered w-32"
                            onChange={(e) => {
                                const minPrice = e.target.value
                                setMin(minPrice);
                            }}
                        />
                    </div>

                    {/* Max Price Input */}
                    <div className="flex items-center gap-2">
                        <label className="text-sm font-medium text-gray-600">Max:</label>
                        <input
                            type="number"
                            placeholder="Max Price"
                            className="input input-bordered w-32"
                            onChange={(e) => {
                                const maxPrice = e.target.value
                                setMax(maxPrice);
                            }}
                        />
                    </div>

                </div>

            </div>

            <FoodGrid items={meals} />
        </div>
    );
};

export default AllMeals;
import MealCard from "../meal-card/MealCard";
// import InfiniteScroll from 'react-infinite-scroll-component';

const FoodGrid = ({ items }) => {

   // console.log(items);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 lg:mt-12 w-11/12 mx-auto'>
            {
                items.map((item,index)=>{
                    return <MealCard key={index} item={item}/>
                })
            }
        </div>

        
    );
};

export default FoodGrid;
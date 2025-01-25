import { Link } from "react-router-dom";

const MealCard = ({ item }) => {

    console.log(item);

    const { name, image, price, rating, _id } = item;

    return (
        <div className="card max-w-md bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt={name}
                    className="w-full h-56 object-cover"
                />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title">{name}</h2>
                <p className="text-gray-600 font-bold">
                    Price: <span className="font-semibold">${price}</span>
                </p>
                <p className="text-gray-600 font-bold">
                    Rating: <span className="font-semibold">{rating} ⭐</span>
                </p>
                <div className="card-actions justify-end">
                    <Link to={`/meal-details/${_id}`}

                        className="btn btn-primary w-full"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MealCard;
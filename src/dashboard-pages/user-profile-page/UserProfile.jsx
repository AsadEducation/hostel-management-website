import useAuth from "../../Hooks/useAuth";


const UserProfile = () => {

    const {user} = useAuth();

    
    return (
        <div className="flex flex-col items-center mt-10 p-6 bg-base-200 rounded-lg shadow-lg max-w-md mx-auto">
            {/* User Image */}
            <div className="avatar mb-4">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user.image} alt={`${user.name}'s avatar`} />
                </div>
            </div>

            {/* User Name */}
            <h2 className="text-2xl font-semibold text-primary">{user.name}</h2>

            {/* User Email */}
            <p className="text-sm text-neutral mt-2">{user.email}</p>

            {/* Badges */}
            <div className="mt-6 flex justify-center gap-2">
                {user.badges.includes("Bronze") && (
                    <div className="badge badge-warning">Bronze</div>
                )}
                {user.badges.includes("Gold") && (
                    <div className="badge badge-accent">Gold</div>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
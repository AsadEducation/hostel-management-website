import { createContext, useCallback, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../Firebase/firebase'

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createNewUser = useCallback(

        (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password);
        }

    )

    const loginUser = useCallback(

        (email, password) => {
            return signInWithEmailAndPassword(auth, email, password);
        }

    )

    const googleLogin = useCallback(

        () => {
            return signInWithPopup(auth, googleProvider)
        }
    )

    const updateUser = useCallback(
        (info) => {
            return updateProfile(auth.currentUser, info)
        }
    )

    const logoutUser = useCallback(
        () => {
            return signOut(auth)
        }
    )

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {


            setUser(currentUser);

            // if (currentUser) {

            //     axios.post('/jwt', { email: currentUser.email })
            //         .then(res => {
            //             // console.log(res.data.token);
            //             const token = res.data.token;
            //             if (token) {

            //                 localStorage.setItem('access-token', token);

            //             }
            //         })
            // }
            // else {
            //     // removing token from ls 
            //     localStorage.removeItem('access-token')
            // }
            setLoading(false);

        })

        return () => {
            return unsubscribe;
        }

    }, [createNewUser, loginUser, logoutUser, googleLogin])



    const info = {
        user,
        loading,
        createNewUser,
        loginUser,
        logoutUser,
        updateUser,
        googleLogin
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../../public/firebase/firebase.init";

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setLoding] = useState(true)

    // sing in with google
    const handelGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)

    }

    // User creat an acount 
    const userSingUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)


    }
    // user Login 
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    // update Profile
    const manageProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }
    const userLogout = () => {
        return signOut(auth)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (curentuser) => {

            if (curentuser) {
                setUser(curentuser)
            } else {
                setUser(null)
            }
            setLoding(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        userSingUp,
        userLogin,
        handelGoogleLogin,
        setUser,
        user,
        manageProfile,
        loading,
        userLogout,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
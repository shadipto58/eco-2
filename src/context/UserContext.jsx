import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


const auth = getAuth(app);

export const AuthContext = createContext();
const UserContext = ({ children }) => {

    // user create
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user login
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const provider = new GoogleAuthProvider();
    const [googleUser, setgoogleUser] = useState({});

    //console.log(googleUser);
    // google login
    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setgoogleUser(user)
                //console.log(user);

            }).catch((error) => {
                // Handle Errors here.
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);

            });
    }

    // user logout
    const logOut = () => {
        signOut(auth)
            .then(() => {

            }).catch((error) => {
                console.log(error);
            })
    }

    //obserb user and save for future use
    const [user, setUser] = useState({});
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            //console.log('Auth changed', currentUser);
        });
        return () => {
            unsub()
        }
    }, [])

    const authInfo = { createUser, userLogin, googleLogin, logOut, user }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
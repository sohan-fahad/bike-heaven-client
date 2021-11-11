import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import intializeFirebase from '../Firebase/Firebase.init';
import Swal from 'sweetalert2';

intializeFirebase()
const useFirebase = () => {

    const [user, setUser] = useState({})
    const [admin, setAdmin] = useState({})
    const [err, setErr] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [controller, setController] = useState(true)

    const auth = getAuth();
    const handleRegister = (email, password, name, history, location) => {
        const _redirect = location?.state?.from || "/"
        console.log(_redirect)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                if (userCredential.user) {
                    // Signed in 
                    const user = userCredential.user;
                    setUser(user)
                    updateProfile(auth.currentUser, {
                        displayName: name
                    }).then(() => {
                        saveUser(user.displayName, user.email, 'POST')
                    }).catch((error) => {
                    });
                    setErr('')
                    history.push(_redirect)
                    Swal.fire(
                        'Good job!',
                        'Create Account Successfully!'
                    )
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErr(errorCode, errorMessage)
                // ..
            })
            setIsLoading(false)
    }

    const hanleLogin = (email, password, history, location) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (userCredential.user) {
                    const _redirect = location?.state?.from || '/'
                    setUser(userCredential.user)
                    setErr("")
                    Swal.fire(
                        'Good job!',
                        'Login Account Successfully!'
                    )
                    history.replace(_redirect)
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErr(errorCode, errorMessage)
            })
            setIsLoading(false)
    }

    const singingUsingGoole = (history, location) => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedinUser = result.user
                if (loggedinUser) {
                    const _redirect = location?.state?.from || '/'
                    setUser(loggedinUser)
                    saveUser(loggedinUser.displayName, loggedinUser.email, 'PUT')
                    setErr("")
                    history.push(_redirect)
                    Swal.fire(
                        'Good job!',
                        'Google Singin Successfully!'
                    )
                }
            })
            .catch((err) => {
                const errorCode = err.code;
                const errorMessage = err.message;
                setErr(errorCode, errorMessage)
            })
            setIsLoading(false)
    }

    // observ user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    }, [])



    const LogOut = () => {
        signOut(auth).then(() => {
            setUser({})
            Swal.fire(
                'Good job!',
                'Logout Successfully!'
            )
        }).catch((error) => {
            setErr(error.errorCode, error.errorMessage)
        });
    }

    const saveUser = (displayName, email, method) => {
        const userInfo = { displayName, email }
        fetch('https://secret-ocean-30546.herokuapp.com/users', {
            method: method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(res=> res.json())
        .finally(()=> setIsLoading(false))
    }

    useEffect(() => {
        fetch(`https://secret-ocean-30546.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    return {
        user,
        err,
        handleRegister,
        hanleLogin,
        singingUsingGoole,
        LogOut,
        isLoading,
        admin,
        setErr,
        controller,
        setController
    };
};

export default useFirebase;
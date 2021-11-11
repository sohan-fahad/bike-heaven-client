import axios from 'axios';
import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import './MakeAdmin.css'

const MakeAdmin = () => {

    // const [email, setEmail] = useState("")
    // const handlEmail = e => {
    //     const userEmail = e.target.value;
    //     setEmail(userEmail)
    //     console.log(email)
    // }
    const emailRef = useRef()
    const handleAdmin = e => {
        const email = emailRef.current.value
        e.preventDefault()
        const user = { email };
        axios.put('https://secret-ocean-30546.herokuapp.com/useradmin', user)
            .then(res => {
                const data = res.data;
                if (data) {
                    Swal.fire(
                        'Success!',
                        'You Made an Admin',
                        'success'
                    )
                    emailRef.current.value = ""
                }
            })

    }
    return (
        <div className="make-admin">
            <form onSubmit={handleAdmin}>
                <input type="email" ref={emailRef} placeholder="Enter email..." />
                <input type="submit" value="Make Admin" className="global-btn" />
            </form>
        </div>
    );
};

export default MakeAdmin;
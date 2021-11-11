import React from 'react';
import { initializeApp } from "firebase/app";
import firebaseConfig from './Firebase.config';

const intializeFirebase = () => {
    return (
        initializeApp(firebaseConfig)
    );
};

export default intializeFirebase;
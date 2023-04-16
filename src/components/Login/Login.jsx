import React from 'react';
import {GoogleAuthProvider, getAuth} from "firebase/auth";
import app from '../../firbase/firbase.init';


const Login = () => {
    const auth = getAuth(app);
    const authProvider = new GoogleAuthProvider();

    const handelGoogleSignIn = () =>{

        console.log("Google mama is Coming !!!");
    }

    return (
        <div>
            <button onClick={handelGoogleSignIn}>Google login</button>
        </div>
    );
};

export default Login;
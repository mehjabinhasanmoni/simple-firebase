import React, { useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut} from "firebase/auth";
import app from '../../firbase/firbase.init';


const Login = () => {
    const [user , setUser] = useState(null);
    const auth = getAuth(app);
    const authProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

    const handelGoogleSignIn = () =>{
        signInWithPopup(auth, authProvider)
        .then(result =>{
            const loggedInUser= result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error =>{
            console.log('Error: ', error.message);
        })
    }

    const handelSignOut = () =>{
        signOut(auth)
        .then(result =>{
            console.log(result);
            setUser(null);
        })
        .catch(error =>{
            console.log(error);
        })

    }

    const handelGitHubSignIn = () =>{
        signInWithPopup(auth, GithubProvider)
        .then(result =>{
            const loggedInUser= result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error =>{
            console.log('Error: ', error.message);
        })
    }
    return (
        <div>
            {/* user ? logout : sign in */}

            
            {user ?
            <button onClick={handelSignOut}>Sign Out</button> :
            <div>
                 <button onClick={handelGoogleSignIn}>Google login</button>
                 <button onClick={handelGitHubSignIn}>GitHub</button>
            </div>
            }
            {user && <div>
               <h1> User : {user?.displayName} </h1>
               <p>Email : {user.email}</p>
               <img src={user.photoURL} alt="" />
            </div>
            }
        </div>
    );
};

export default Login;
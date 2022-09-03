import React from "react";
import { Link, useHistory } from "react-router-dom";
import './Login.css'
import { useState } from "react";
import { auth, db } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        if((email != '') && (password != ''))
        {
        if(email !== 'admin@gmail.com'){
        auth.signInWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/')
                alert("Welcome Back !!!")
            })
            .catch(error => alert(error.message))
        } else {
            auth.signInWithEmailAndPassword(email,password)
                .then(auth => {
                    history.push('/Admin')
                })
        }
    }else{
        alert("Enter data in both fields")
    }
    }
    


    const register = e => {
        e.preventDefault();
        if((email != '') && (password != ''))
        {
        auth.createUserWithEmailAndPassword(email,password)
            .then((auth) => {
            
                //it successfully created a new user with email and password
            if (auth){
                alert("Registered Successfully!!")
                history.push('/')
            }
        })
        .then(() => {
            return db.collection("Users").add({
                email:email,
            })
        })
        .catch(error => alert(error.message))

        // some fancy firebase register
    }else{
        alert("Enter data in both fields")
    }
    }

    return (
        <div className="login">
            <Link to='/'>
            <img className="login_logo"
            src="https://i.postimg.cc/8CYbGD5x/Street-Hub-3.png" />
            </Link>

            <div className="login_containter">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <Link className="Forgot" to='/Forgot_password'>Forgot Password?</Link>

                    <button type="submit" onClick={signIn} className="login_signinbutton"> Sign In</button>
                    <button onClick={register} className="login_registerbutton">Create Account</button>
                </form>

            </div>

        </div>
    )
}

export default Login;
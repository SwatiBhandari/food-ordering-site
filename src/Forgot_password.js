import React from "react";
import { Link, useHistory } from "react-router-dom";
import './Login.css'
import { useState } from "react";
import { auth } from "./firebase";

function Forgot_password() {
    
    const history = useHistory();
    const [email, setEmail] = useState('');

    const resetEmail = event => {
        event.preventDefault();

        auth.sendPasswordResetEmail(email)
            .then(auth => {

                setTimeout(() => {
                    history.push('/login');
                }, 4000);
            })
            .catch(error => alert(error.message))
    }


    return (
        <div className="login">
            <Link to='/'>
            <img className="login_logo"
            src="https://i.postimg.cc/8CYbGD5x/Street-Hub-3.png" />
            </Link>

            <div className="login_containter">
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={event => setEmail(event.target.value)} />

                    <button type="submit" onClick={resetEmail} className="login_signinbutton"> Send Reset Email </button>
                    <Link to='/login'>Back to Login </Link> 
                </form>

            </div>

        </div>
    )
}

export default Forgot_password;
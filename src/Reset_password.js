import React from "react";
import { Link, useHistory } from "react-router-dom";
import './Login.css'
import { useState } from "react";
import { auth } from "./firebase";

function Reset_password() {
    const history = useHistory();
    const [password, setPassword] = useState('');
    const oobCode='';

    const resetPassword = e => {
        e.preventDefault();

        auth.confirmPasswordReset(oobCode,password)
            .then(auth => {
                history.push('/')
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
                <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} /> 
                    <button onClick={resetPassword} className="login_registerbutton">Reset Password</button>
                    <Link to='/login'>Back to Login </Link>
                </form>

            </div>

        </div>
    )
}

export default Reset_password;
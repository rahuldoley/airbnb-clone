import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth 
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))


    }
    return (
        <div className='login'>
            <Link to='/'>
            <img 
                className="login__logo"
                src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" />
                </Link>

                <div className='login__container'>
                    <div className="login__header">
                        <h1>Log in or sign up</h1>
                    </div>

                    <form>
                        <h5>E-mail</h5>
                        <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                        <h5>Password</h5>
                        <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                        <button type='submit' onClick={signIn}className='login__signInButton'>Log in</button>
                    </form>

                    <p>
                        By signing-in you agree to airbnb Conditions of Use & Sale. Please
                        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    <button onClick={register}
                    className='login__registerButton'>Sign up</button>
                </div>
        </div>
    )
}

export default Login;
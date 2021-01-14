import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './Login.css';
import {auth} from '../firebase';

function Login() {
    const history  =useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');

    const logIn = e => {
        e.preventDefault();              //This will prevent the page from refreshing

        //Firebase login part
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth){
                    history.push("/");
                    alert("Logged in successfully");
                }
            })
            .catch(error => alert(error.message));
    }
    const signUp = e => {
        e.preventDefault();
        //Firebase signUp/createUser part
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if(auth){
                    history.push('/');
                    alert("Account created successfully")  //Once user creates an acc, it'll recieve a popup, and window wil reload
                }
            })
            .catch(error => alert(error.message))

    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="logo"/>
            </Link>
            <div className="login_container">
                <h1>Log-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/> 
                    {/**Once the user types the data, it'll automaticaly update the state, there itself */}
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className="login_button" onClick={logIn} type="submit">Log In</button>
                </form>
                <p className="login_text">By signing-in you agree to Amazon Clone's Condition of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                <button className="signup_button" onClick={signUp}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login

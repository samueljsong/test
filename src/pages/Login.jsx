
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'
import { useState } from 'react';
import axios from 'axios';


export const Login = ({cookies}) => {
    axios.defaults.withCredentials = true;
    const navigateTo = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);

    async function onClickHandler(){
        let username = "testing"
        let password = "123"

        fetch('https://testapi-7mzl.onrender.com/loginUser', {
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers:{
                'Content-Type' : 'application/json'
            },
        })
            .then(res => res.json())
            .then(json => {
                if (json.loginSuccess){
                    cookies.set('session', json.sessionID)
                    navigateTo("/landing");
                }
            })
    }

    return(
        <div className='login-form'>
            <h1>Login</h1>
            <input type="text" name='username' placeholder='username' id='username' />
            <input type="password" name='password' id='password' />
            <button onClick={onClickHandler}>Login</button>
        </div>
    )
}
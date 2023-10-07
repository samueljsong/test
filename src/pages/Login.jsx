
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'
import { useState } from 'react';


export const Login = () => {
    const navigateTo = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);

    async function onClickHandler(){
        fetch('https://testapi-7mzl.onrender.com/', {
            mode: 'cors',
            method: 'GET'
        })
            .then(res => res.json())
            .then(json => console.log(json))
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

import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'
import { useState } from 'react';


export const Login = () => {
    const navigateTo = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);

    async function onClickHandler(){
        try{
            fetch('http://owfsbrlpdm.us19.qoddiapp.com/loginUser',{
                method: 'POST',
                body: ({
                    username: "testing",
                    password: "123"
                })
            })
                .then(res => res.json())
                .then(json => {
                    if(json.loginSuccess){
                        navigateTo('/landing');
                    }
                })
        }catch(e){
            console.log(e);
        }
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
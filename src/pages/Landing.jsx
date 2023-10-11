import { useEffect, useState } from "react"

export const Landing = ({cookies}) => {

    async function onButtonClickHandler(){
        fetch('https://jolly-clam-tuxedo.cyclic.app/landing', {
            mode: 'cors',
            method: "POST",
            body: JSON.stringify({sessionID: cookie}),
            headers:{
                'Content-Type' : 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => {
                setUsername(json.username);
            })
    }

    const [cookie, setCookie] = useState(cookies.get('session'))
    
    const [username, setUsername] = useState('');

    return(
        <>
            <button onClick={onButtonClickHandler}>click to get username</button>
            <h1>{username}</h1>
            <h1>{cookie}</h1>
        </>
    )
}
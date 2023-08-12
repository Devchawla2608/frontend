import React from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import jwt from 'jsonwebtoken'


export const PrivateRoute = (props) => {
    const navigate = useNavigate();
    console.log('props', props);
    const [authenticated, setAuthenticated] = useState(null);
    const [loadingComplete, setLoadingComplete] = useState(false);
    useEffect(() => {
        const ni_token = localStorage.getItem('token');
        if(ni_token){
            const user = jwt.decode(ni_token);
            if(!user){
                localStorage.removeItem('token');
                setAuthenticated('Invalid Token');
                navigate('/');
            }
            setAuthenticated('Verify Token Respone');
            setLoadingComplete(true);
        }else{
            setAuthenticated('No Token');
            navigate('/');
        }
    }, []);

    // React Hook useEffect has a missing dependency: 'navigate'. Either include it or remove the dependency
    // What is the solution ?
    // https://stackoverflow.com/questions/55840294/react-hook-useeffect-has-a-missing-dependency-navigate-either-include-it-o



    if(loadingComplete){
        return (authenticated === 'Verify Token Respone' ?
        props.children :
        <Navigate to="/" />)
    }else {
        console.log('Loading...');
        return (<div> Loading...</div>)
    }
}

export default PrivateRoute
import React from 'react';

const Login = ({children}) => {
    return (
        <login id='login' role='login'>
            {children}
        </login>
    );
};

export default Login;
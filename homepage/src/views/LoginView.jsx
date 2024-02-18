import React from 'react';
import LoginNav from '../components/LoginNav'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../pages/Login';

const LoginView = () => {
    return (
        <>
            <Header/>
            <Login>
                <LoginNav/>
            </Login>
            <Footer/>
        </>
    );
};

export default LoginView;
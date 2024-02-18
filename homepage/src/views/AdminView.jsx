import React from 'react';
import Header from '../components/Header';
import Admin from '../pages/Admin';
import Footer from '../components/Footer';
import Register from '../components/Register';


const AdminView = () => {
    return (
        <>
            <Header/>
            <Admin>
                <Register/>
            </Admin>
            <Footer/>
        </>
    );
};

export default AdminView;
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Change from '../pages/Change'
import PwdChange from '../components/PwdChange';

const PwdChangeView = () => {
    return (
        <>
            <Header/>
            <Change>
                <PwdChange></PwdChange>
            </Change>
            <Footer/>
        </>
    );
};

export default PwdChangeView;
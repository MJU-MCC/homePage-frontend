import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import _404 from '../pages/_404';

const _404View = () => {
    return (
        <>
            <Header/>
            <_404/>
            <Footer/>
        </>
    );
};

export default _404View;
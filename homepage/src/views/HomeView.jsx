import React from 'react';
import Intro from '../components/Intro';
import Header from '../components/Header';
import Main from '../pages/Main';
import Footer from '../components/Footer';
import About from '../components/About'
import Study from '../components/Study';
import Project from '../components/Project';

const HomeView = () => {
    return (
        <>
        <Header/>
        <Main>
            <Intro/>
            <About/>
            <Study/>
            <Project/>
        </Main>
        <Footer/>
        </>
    );
};

export default HomeView;
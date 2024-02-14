import React from 'react';
import '../styles/setting/_main.scss'

const Main = ({children}) => {
    return (
        <main id='main' role='main'>
            {children}
        </main>
    );
};

export default Main;
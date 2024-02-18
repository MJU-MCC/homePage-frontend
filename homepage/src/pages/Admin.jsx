import React from 'react';

const Admin = ({children}) => {
    return (
        <admin id='admin' role='admin'>
            {children}
        </admin>
    );
};

export default Admin;
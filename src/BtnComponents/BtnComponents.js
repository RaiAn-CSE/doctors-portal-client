import React from 'react';

const BtnComponents = ({ children }) => {
    return (
        <button className="btn text-white btn-primary bg-gradient-to-r from-primary to-secondary">{children}</button>
    );
};

export default BtnComponents;
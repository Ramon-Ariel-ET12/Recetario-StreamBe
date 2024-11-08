import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className=' d-flex flex-column justify-content-between' style={{ height: '100vh' }}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div >
    );
};

export default Layout;

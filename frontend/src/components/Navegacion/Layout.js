import React, { useContext, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../Authorization';

const Layout = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const { logueado } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!logueado && !location.pathname.toLowerCase().includes('/iniciar-sesion')) {
            console.log("No estas logueado");
            
            navigate('/iniciar-sesion');
        }
        else {
            setLoading(false);
        }
    }, [location, logueado, navigate]);

    if (loading) {
        return (<><p>Loading....</p></>);
    }

    return (

        <div className=' d-flex flex-column justify-content-between' style={{ height: '100vh' }}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div >
    );
};

export default Layout;

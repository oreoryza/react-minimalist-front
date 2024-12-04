import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Menambahkan perilaku gulir yang halus
        });
    }, [pathname]);

    return null; // Komponen ini tidak perlu merender apa pun
};

export default ScrollToTop;
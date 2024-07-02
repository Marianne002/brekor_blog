// components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [navbarBg, setNavbarBg] = useState('transparent');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos > 0) {
                setNavbarBg('gray');
            } else {
                setNavbarBg('transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`navbar fixed-top ${navbarBg === 'gray' ? 'bg-gray' : ''}`}
            aria-label="Menu de navigation"
        >
            <a className="navbar-brand" href="/">
                <img 
                    className="d-xs-block d-sm-block d-md-none d-lg-none" 
                    src="/assets/logo-brekor-small.svg" 
                    alt="Petit logo Brekor"
                />
                <img 
                    className="d-none d-xs-none d-sm-none d-md-block d-lg-block" 
                    src="/assets/logo-brekor.svg" 
                    alt="Logo Brekor"
                />
            </a>
            <a 
                className="nav-link btn-gradient" 
                target="_blank" 
                href="https://brekor.fr/"
                aria-label="Découvrir le site Brekor"
            >Découvrir Brekor</a>
        </nav>
    );
}

export default Navbar;

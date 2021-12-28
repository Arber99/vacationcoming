import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.css';

const Menu = () => (
    <>
    <p><a href="/">FAQ</a></p>
    <p><a href="https://github.com/Arber99/vacationcoming">GitHub</a></p>
    <p><a href="/">Contact</a></p>
    </>
)

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className='navbar'>
            <div className='navbar-links'>
                <div className='navbar-links_logo'>
                    {/* <img src={logo} alt='logo' /> */}
                </div>
                <div className='navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='navbar-menu'>
                {
                    toggleMenu ?
                    <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />:
                    <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {
                    toggleMenu && (
                        <div className='navbar-menu_container scale-up-center'>
                            <div className='navbar-menu_container-links'>
                                <Menu />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar
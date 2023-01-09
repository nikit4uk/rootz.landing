import React from 'react';
import './header.scss';
import LogoVector1 from '../../img/Logo/Vector.svg';
import LogoVector2 from '../../img/Logo/Vector-1.svg';
import LogoVector3 from '../../img/Logo/Vector-2.svg';
import LogoName from '../../img/Logo/Rootz.svg';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='logo'>
                    <span>
                        <img src={LogoVector1}/>
                        <img src={LogoVector2}/>
                        <img src={LogoVector3}/>
                    </span>
                    <img src={LogoName}/>
                </div>
                <nav className='menu'>
                    <ul>
                        <li className='active'>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Our mission</a>
                        </li>
                        <li>
                            <a>Places</a>
                        </li>
                        <li>
                            <a>Team</a>
                        </li>
                    </ul>
                </nav>
                <a className='btn'>Apply</a>
                <div className='mob__nav-button'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header;
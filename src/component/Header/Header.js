import React, {useState} from 'react';
import './header.scss';
import Logo from '../../img/Logo/Logo.svg';
import LogoName from '../../img/Logo/Rootz.svg';

const Header = () => {
    const [ menuActive, setMenuState ] = useState(false);

    return (
        <header>
            <div className='container'>
                <div className='logo'>
                    <span>
                        <img src={Logo} alt='Logo'/>
                    </span>
                    <img src={LogoName} alt='LogoName'/>
                </div>
                <nav className={`menu ${menuActive ? 'active' : ''}`}>
                    <ul>
                        <li className='active'>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>Our mission</a>
                        </li>
                        <li>
                            <a href='#'>Places</a>
                        </li>
                        <li>
                            <a href='#'>Team</a>
                        </li>
                    </ul>
                    <a className='btn mob-btn' href='#'>Apply</a>
                </nav>
                <a className='btn desc-btn' href='#'>Apply</a>
                <div className={`mob__nav-button ${menuActive ? 'opened' : ''}`} onClick={() => setMenuState((menuActive) => !menuActive)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header;
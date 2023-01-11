import React from 'react';
import './footer.scss';
import Twitter from '../../img/Footer/Twitter.svg';
import Facebook from '../../img/Footer/Facebook.svg';
import LinkedIn from '../../img/Footer/LinkedIn.svg';

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='copiright'>
                    <h3>contacts</h3>
                    <p>2019 Rootz Foundation .All rights reserved</p>
                </div>
                <div>
                    <h5>Headquarters</h5>
                    <p>1234 Taliban<br />Los Angeles, La 1234567<br /><a href='tel:1234567890'>(123) 456-7890</a></p>
                </div>
                <div>
                    <h5>Social media</h5>
                    <div className='social'>
                        <img src={Twitter} alt='twitter-logo'/>
                        <img src={Facebook} alt='facebook-logo'/>
                        <img src={LinkedIn} alt='linkedIn-logo'/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
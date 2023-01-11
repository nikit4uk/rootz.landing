import React from 'react';
import './ourTeam.scss';
import Team1 from '../../img/OurTeam/Team1.png';
import Team2 from '../../img/OurTeam/Team2.png';
import Team3 from '../../img/OurTeam/Team3.png';

const OurTeam = () => {
    return (
        <section id='ourTeam'>
            <div className='container'>
                <div className='section-header'>
                    <h3>Our top team</h3>
                    <p>Learn more about how you can save our planet's nature.</p>
                </div>
                <div className='ourTeam'>
                    <img src={Team1} alt='team-1'/>
                    <img src={Team2} alt='team-2'/>
                    <img src={Team3} alt='team-3'/>
                </div>
            </div>
        </section>
    )
}

export default OurTeam;
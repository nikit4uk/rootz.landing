import React from 'react';
import './main.scss';
import Title from '../../img/Main/Title.svg';
import Parrot from '../../img/Main/Parrot.svg';
import MemberIcon from '../../img/Main/MemberIcon.svg';

const Main = () => {
    return (
        <section id='main'>
            <div className='container'>
                <div className='main-left_col'>
                    <img className='title-image' src={Title}/>
                    <p>The scale of the challenges facing our planet can seem daunting, but we can all do something.</p>
                    <div className='search-label'>
                        <input type='text' placeholder='Find the place to help' />
                        <button>search</button>
                    </div>
                </div>
                <div className='main-right_col'>
                    <img className='parrot-image' src={Parrot}/>
                    <div className='main-members'>
                        <img src={MemberIcon} />
                        <span>
                            <p className='main-members__title'>Members</p>
                            <p className='main-members__numbs'>29 128</p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;
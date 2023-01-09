import React from 'react';
import './main.scss';
import Title from '../../img/Main/Title.svg';
import Parrot from '../../img/Main/Parrot.svg';

const Main = () => {
    return (
        <section id='main'>
            <div className='container'>
                <div className='main-left_col'>
                    <img src={Title}/>
                </div>
                <div className='main-right_col'>
                    <img src={Parrot}/>
                </div>
            </div>
        </section>
    )
}

export default Main;
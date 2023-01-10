import React from 'react';
import './getStarted.scss';

const GetStarted = () => {
    return (
        <section id='getStarted'>
            <div className='container'>
                <div className='getStarted-left_col'>
                    <h3>Get started today!</h3>
                    <p>Learn more about how you can save our planet's nature. From smart consumption to switching to renewable energy, each of us can do our part to save the planet. </p>
                </div>
                <div className='getStarted-right_col'>
                    <form>
                        <h4>Log in</h4>
                        <input type='text' placeholder='Name' />
                        <input type='email' placeholder='Email' />
                        <button>Book a demo</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default GetStarted;
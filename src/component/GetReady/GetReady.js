import React from 'react';
import './getReady.scss';

const GetReady = () => {
    return (
        <section id='getReady'>
            <div className='container'>
                <div className='getStarted-left_col'>
                    <h3>Ready to Get started?</h3>
                    <p>When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.</p>
                    <a className='btn'>Contact us</a>
                </div>
                <div className='getStarted-right_col'>
                    <details open>
                        <summary>What can I do to protect our planet?</summary>
                        <p>Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources</p>
                    </details>
                    <details>
                        <summary>How to save nature ecology?</summary>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta condimentum viverra. Aenean maximus dolor turpis, rutrum porttitor orci sagittis in</p>
                    </details>
                    <details>
                        <summary>What is nature conservation?</summary>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta condimentum viverra. Aenean maximus dolor turpis, rutrum porttitor orci sagittis in</p>
                    </details>
                </div>
            </div>
        </section>
    )
}

export default GetReady;
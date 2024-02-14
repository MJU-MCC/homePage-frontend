import React from 'react';
import '../styles/section/_about.scss'

const About = () => {
    return (
        <saction id='about'>
            <div className='about__inner'>
                <div className='circle'>
                    <h2>Since</h2>
                    <p>1980</p>
                </div>
                <div className='circle'>
                    <h2>Member</h2>
                    <p>2000+</p>
                </div>
                <div className='circle'>
                    <h2>Project</h2>
                    <p>+</p>
                </div>
            </div>
        </saction>
    );
};

export default About;
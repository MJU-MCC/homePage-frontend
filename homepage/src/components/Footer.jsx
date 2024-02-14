import React from 'react';
import '../styles/section/_footer.scss'

const Footer = () => {
    return (
        <section id='footer'>
            <div className='footer__inner'>
            <div className='option'>
                    <span>Notion</span>
                    <span>Instagram</span>
                    <span>Github</span>
                    <span>Admin</span>
                </div>
                
                <div className='text'>
                    <p>
                        MCC Myungji Computer Club (명지대학교 컴퓨터 동아리)<br/>
                        Copyright©2024.MCC. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
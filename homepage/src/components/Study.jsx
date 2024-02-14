import React from 'react';
import study from '../assets/images/study.png'
import '../styles/section/_study.scss'

const Study = () => {
    return (
        <section id='study'>
            <div className='study__inner'>
                <img src={study}></img><span/>
                <h1>Study 활동</h1>
                <h3>
                    <br/><br/>배우고싶은 다양한 분야를<br/>
                    열정있는 사람들과 Study 할수있는 기회!
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
            </div>
        </section>
    );
};

export default Study;
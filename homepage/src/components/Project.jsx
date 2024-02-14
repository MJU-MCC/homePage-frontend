import React from 'react';
import '../styles/section/_project.scss'
import {projectData} from '../constant/projectData'

const Project = () => {
    return (
        <section id='project'>
            <h1>Project</h1>
            <div className='project__inner'>
                {/* <div className='project-title'>
                    <h1>Project</h1>
                </div> */}
                <div className='project_list'>
                    {projectData.map((project,index)=>{
                        const adjustedIndex = index % projectData.length;
                        return(
                            <div className='project' key={index}>
                                <img src={projectData[adjustedIndex].image} style={{width:'300px', height:'200px'}} alt={`Project ${adjustedIndex}`}></img>
                            </div> 
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Project;
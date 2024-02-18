import React from 'react';
import '../styles/section/_project.scss'
import {projectData} from '../constant/projectData'

const Project = () => {
    const images=projectData.map(data=>data.image)
    const repeatImages=[]
    for(let i=0; i<1000;i++){
        repeatImages.push(...images)
    }
    return (
        <section id='project'>
            <h1>Project</h1>
            <div className='project__inner'>
                <div className='project_list'>
                    {repeatImages.map((image,index)=>{
                        // const adjustedIndex = index % projectData.length;
                        // const adjustedIndex = index + 1 + Math.floor(index / projectData.length) * projectData.length;
                        return(
                            <div className='project' key={index}>
                                <img src={image} style={{width:'300px', height:'200px'}} alt={`Project ${index+1}`}></img>
                            </div> 
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Project;
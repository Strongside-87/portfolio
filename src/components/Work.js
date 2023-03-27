// Work.js

import React from 'react';
import './Work.css';

const Work = () => {
    const projects = [
        {
            id: 1,
            title: 'Project 1',
            image: 'image1.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 2,
            title: 'Project 2',
            image: 'image2.jpg',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 3,
            title: 'Project 3',
            image: 'image3.jpg',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            id: 4,
            title: 'Project 4',
            image: 'image4.jpg',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
    ];

    return (
        <div className="work-container">
            <h2>My Projects</h2>
            <div className="project-row">
                {projects.slice(0, 2).map(project => (
                    <a href={`/project/${project.id}`} key={project.id}>
                        <div className="project-box">
                            <img src={project.image} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
            <div className="project-row">
                {projects.slice(2, 4).map(project => (
                    <a href={`/project/${project.id}`} key={project.id}>
                        <div className="project-box">
                            <img src={project.image} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Work;

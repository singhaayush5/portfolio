import React from 'react';
import Project from './Project';
import projectdata from './../projectdata/projectdata.js';

function Projects() {

  return (
    <div id='projects' className='sm:pl-[5rem] sm:p-8 p-12 mt-4 sm:mt-0 sm:px-4 sm:py-2'>
        <div>
        <blockquote className="font-[800] text-[1.7rem] text-[#1DD0FD;] mt-[100px] text-center">
                        <span className="before:block mx-4 mb-6 mt-4 before:absolute before:-inset-2 before:-skew-y-[3deg] before:bg-[#1DD0FD;] relative inline-block">
                            <span className="relative text-[#fffffff0] dark:text-[#2E1342]">Projects</span>
                        </span>
                    </blockquote>
        </div>

        {projectdata.map((project) => {
            return(<Project key={project.id}
                image={project.img}
                name={project.name}
                live={project.live}
                source={project.source}
                desc={project.description}/>)
        })}
       
    </div>
  );
}

export default Projects;

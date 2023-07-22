import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

function Projects({image, name, live, source, desc}) {
  return (
    <div className='flex flex-col-reverse gap-20 mt-12 sm:flex-row sm:items-center sm:justify-between'>
        <div className='lg:w-[130%]'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-bold text-[#1DD0FD]'>{name}</h1>
                <p className='sm:text-justify font-light  leading-loose text-sm sm:text-base'>{desc}</p>
                <div className='flex gap-5 mt-7'>
                    {
                        live && <a href={live} target='_blank' rel='noreferrer' className='flex items-center bg-[#1DD0FD] text-white px-4 py-2 rounded-md text-sm'>
                        Live Demo
                    </a>
                    }
                    
                    <a href={source} target='_blank' rel='noreferrer' className='flex items-center gap-1 px-4 py-2 border border-black rounded-md text-sm bg-white dark:bg-[#20262E]'>
                        <AiFillGithub className='w-6 h-6' /> Github Repo
                    </a>
                </div>
            </div>
        </div>
        
        <div className='flex flex-row-reverse lg:mr-20 md:mr-20 w-[100%]'>
            <img alt='project' src={image} className='rounded-md w-full sm:w-[60%] z-1 border-2 border-gray-50 ' />
        </div>
    </div>
  );
}

export default Projects;

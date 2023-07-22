import React from 'react';

import bitlogo from '../assets/bitlogo.jpeg'
import jpslogo from '../assets/jpslogo.jpg'


function EducationTimeline() {
  return (
    <div id="education" className=' sm:pl-[3.5rem] p-8 mx-7 mt-4 sm:mt-0 sm:pt-16 pb-20 sm:px-4 sm:py-0'>
      <div>
      <blockquote className="font-[800] text-[1.7rem] text-[#1DD0FD;] mt-[10] text-center">
                        <span className="before:block mx-4 mb-6 mt-4 before:absolute before:-inset-2 before:-skew-y-[3deg] before:bg-[#1DD0FD;] relative inline-block">
                            <span className="relative text-[#fffffff0] dark:text-[#2E1342]">Education</span>
                        </span>
                    </blockquote>
      </div>

     
       
<ol class="relative border-l border-gray-200 dark:border-gray-700 mt-5">                  
    <li class="mb-10 ml-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-black rounded-full -left-3 ring-8 ring-white ">
            <img class="rounded-full shadow-lg" src={bitlogo} alt="Bonnie image"/>
        </span>
        <div class="items-center justify-between p-4 bg-black border border-black rounded-lg shadow-sm sm:flex bg-opacity-60">
            <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Dec 2021 - present</time>
            <div class="text-sm font-normal text-gray-500 dark:text-gray-300">
              <h3 style={{fontWeight:700, fontSize:"1.1rem", marginBottom:"5px", color:""}}>Birla Institute of Technology - Mesra</h3>
              <h3>Bachelor of Technology - Computer Science</h3>
              <h3 style={{fontWeight:700, fontSize:"0.9rem", marginBottom:"5px", color:"#62F3FF"}}>CGPA (till 4th semester) : 9.05/10</h3>
            </div>
        </div>
    </li>
    <li class="mb-10 ml-6">            
    <span class="absolute flex items-center justify-center w-6 h-6 bg-black rounded-full -left-3 ring-8 ring-white ">
            <img class="rounded-full shadow-lg" src={jpslogo} alt="Bonnie image"/>
        </span>
        <div class="items-center justify-between p-4 bg-black border border-black rounded-lg shadow-sm sm:flex bg-opacity-60">
            <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2021</time>
            <div class="text-sm font-normal text-gray-500 dark:text-gray-300">
              <h3 style={{fontWeight:700, fontSize:"1.1rem", marginBottom:"5px"}}>Jamshedpur Public School</h3>
              <h3>12th - CBSE</h3>
              <h3 style={{fontWeight:700, fontSize:"0.9rem", marginBottom:"5px", color:"#62F3FF"}}>Score : 95.6%</h3>

            </div>
        </div>
    </li>
    <li class="mb-10 ml-6">            
    <span class="absolute flex items-center justify-center w-6 h-6 bg-black rounded-full -left-3 ring-8 ring-white ">
            <img class="rounded-full shadow-lg" src={jpslogo} alt="Bonnie image"/>
        </span>
        <div class="items-center justify-between p-4 bg-black border border-black rounded-lg shadow-sm sm:flex bg-opacity-60">
            <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2019</time>
            <div class="text-sm font-normal text-gray-500 dark:text-gray-300">
              <h3 style={{fontWeight:700, fontSize:"1.1rem", marginBottom:"5px"}}>Jamshedpur Public School</h3>
              <h3>10th - CBSE</h3>
              <h3 style={{fontWeight:700, fontSize:"0.9rem", marginBottom:"5px", color:"#62F3FF"}}>Score : 96.6%</h3>

            </div>
        </div>
    </li>
    
</ol>

    </div>
  );
}

export default EducationTimeline;
 
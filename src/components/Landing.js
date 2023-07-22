import React from 'react';
import TypingAnimation  from './TypingAnimation';

function Landing() {
    
    return (
        <div id="main" className="flex flex-col sm:min-h-0 min-h-[calc(100vh-6.4rem)] pl-[3rem] lg:mt-2 lg:m-16 lg:pt-0 pr-[1rem] py-[0rem] md:mt-0 md:pt-0 tm:flex-col sm:flex-row sm:px-[1.5rem] sm:mt-0">
            <div className="flex flex-col sm:flex-row sm:items-center pt-0 justify-center w-full min-h-[58vh] tm:min-h-min tm:w-full sm:min-h-min sm:w-full sm:pt-0 tm:pt-0">
                <div className="flex flex-col justify-center sm:w-[70%] w-full sm:mr-5 h-[calc(100vh-6.4rem)]">
                    <h1 className="font-[400] text-[1rem] md:text-[1.7rem] tm:text-[2rem] sm:text-[1.6rem] text-center">
                        Hi&nbsp;👋🏻
                    </h1>
                    <blockquote className="font-[800] text-[2rem] text-[#1DD0FD;] mt-[10px] lg:text-[4rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1rem] text-center">
                        I'm
                        <span className="before:block mx-4 mb-6 mt-4 before:absolute before:-inset-2 before:-skew-y-[3deg] before:bg-[#1DD0FD;] relative inline-block">
                            <span className="relative text-[#fffffff0] dark:text-[#2E1342]">Aayush Singh</span>
                        </span>
                    </blockquote>
                    <div className="h-10 mt-4 flex justify-center">
                        <TypingAnimation />
                    </div>
                    
                    
                </div>
                
            </div>
            
        </div>
    );
}

export default Landing;

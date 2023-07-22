import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../assets/logo.png'

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const scrollToComponent = (componentId) => {
        const component = document.getElementById(componentId);
        if (component) {
            component.scrollIntoView({
                behavior: 'smooth',
                duration: 2000,
                block: 'start',
                inline: 'nearest',
            });
        }
    };

    const handleWindowResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth > 640 && showMenu) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [showMenu]);

    return (
        <>
            <div className="flex justify-between mt-[2rem] ">
                <img src={logo} className="h-[2vw] min-h-[35px] sm:h-[1.8rem] ml-[3rem]"></img>
                {!showMenu && (
                    <ul className="hidden tm:block sm:flex md:flex font-[400] text-black dark:text-white dark:font-[300] text-custom-20 sm:gap-[2rem] md:gap-[3rem] lg:gap-[4rem] mr-[1rem]">
                        <a
                            className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#1DD0FD;] font-[400]"
                            onClick={() => scrollToComponent('education')}
                        >
                            Education
                        </a>
                        <a
                            className="tracking-wide hover:after:bg-black dark:hover:after:bg-[#1DD0FD;] font-[400]"
                            onClick={() => scrollToComponent('projects')}
                        >
                            Projects
                        </a>
                        <a
                            className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#1DD0FD;] font-[400]"
                            onClick={() => scrollToComponent('contact')}
                        >
                            Contact
                        </a>
                    </ul>
                )}
                </div>

                <div className="flex">
                    <div className="tm:hidden sm:hidden absolute top-[2rem] right-[3.5rem]">
                        <GiHamburgerMenu
                            className="h-6 w-6 cursor-pointer"
                            onClick={() => setShowMenu(!showMenu)}
                        />
                    </div>
                    {showMenu && (
                        <ul className="flex flex-col font-[400] text-black dark:font-[300] text-custom-20 gap-[2rem] md:gap-[3rem] lg:gap-2rem absolute top-[4.5rem] right-[3.5rem] z-10 bg-[#fdd6cf] p-4 shadow-md rounded">
                            <a
                                className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#1DD0FD;] font-[400]"
                                onClick={() => scrollToComponent('education')}
                            >
                                Experience
                            </a>
                            <a
                                className="tracking-wide hover:after:bg-black dark:hover:after:bg-[#1DD0FD;] font-[400]"
                                onClick={() => scrollToComponent('projects')}
                            >
                                Projects
                            </a>
                            <a
                                className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#1DD0FD;] font-[400]"
                                onClick={() => scrollToComponent('contact')}
                            >
                                Contact
                            </a>
                        </ul>
                    )}
                </div>
        </>
    );
}

export default Navbar;

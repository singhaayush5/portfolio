import React from 'react'
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function BackgroundView({ children }) {

    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div id="particles-js" className='z-0'>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 144,
                    interactivity: {

                        modes: {
                            push: {
                                quantity: 41
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.1
                            }
                        }
                    },
                    particles: {
                        color: {
                           
                            value: "#1DD0FD",
                            
                        },
                        links: {
                           
                            color: "#1DD0FD",
                            distance: 100,
                            enable: true,
                            opacity: 0.2,
                            width: 0.9
                        },
                        collisions: {
                            enable: false
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "out"
                            },
                            random: true,
                            speed: 7,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 700
                            },
                            value: 60
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            value: { min: 1, max: 3 }
                        }
                    },
                    detectRetina: true
                }}
            />
            {children}
        </div >
    )
}

export default BackgroundView
import React from "react";
import Styles from "./Parallax.module.css"
import Particles from 'react-particles-js';

function PartCon(props) {
    return (
        <div>
            {props.children}
            <Particles
                className={Styles.partCon}
                params={{
                    particles: {
                        number: {
                            value: 60,
                            density: {
                                enable: true,
                                value_area: 700
                            }
                        },
                        color: {
                            value: '#fff'
                        },
                        opacity: {
                            value: 0.5,
                            anim: {
                                enable: true
                            }
                        },
                        size: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 3
                            }
                        },
                        move: {
                            speed: 1
                        },
                    },
                    interactivity: {
                        detect_on: "window",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse"
                            }
                        }
                    }
                }}

            />

        </div>
    )
}

export default PartCon;
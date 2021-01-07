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
                            value: 100,
                            density: {
                                enable: true,
                                value_area: 900
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
                        }
                    }
                }}

            />

        </div>
    )
}

export default PartCon;
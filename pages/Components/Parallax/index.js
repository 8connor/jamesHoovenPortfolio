import React from "react";
import Styles from "./Parallax.module.css"

function Parallax (props){
    return (
        <div className={Styles.parallax}>
            {props.children}
        </div>
    )
}

export default Parallax;
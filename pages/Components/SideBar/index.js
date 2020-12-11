import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge, faFileAlt, faProjectDiagram, faHome } from '@fortawesome/free-solid-svg-icons';
import styles from "./SideBar.module.css";

// className={window.location.pathname === "/" ? `text-danger` : ""}

function SideBar() {
    return (
        <div className={`${styles.sideBar} bg-dark`}>
            <div className={`${styles.iconCon}`}>
                <a href="/">
                    <FontAwesomeIcon icon={faHome}  />
                </a>
                <a href="/projects">
                    <FontAwesomeIcon icon={faProjectDiagram} />
                </a>
                
                <a href="/resume">
                    <FontAwesomeIcon icon={faFileAlt} />
                </a>

                <a href="/contact">
                    <FontAwesomeIcon icon={faIdBadge} />
                </a>
            </div>
        </div>
    )
}

export default SideBar;
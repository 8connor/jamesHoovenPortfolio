import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge, faFileAlt, faProjectDiagram, faHome } from '@fortawesome/free-solid-svg-icons';

function SideBar() {
    return (
        <div className={`sideBar bg-dark`}>
            <div className={`iconCon`}>
                <a href="/">
                    <FontAwesomeIcon icon={faHome} />
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
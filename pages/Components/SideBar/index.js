import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge, faFileAlt, faProjectDiagram, faHome } from '@fortawesome/free-solid-svg-icons';
import styles from "./SideBar.module.css";

function SideBar() {
    const [resume, setResume] = useState("");
    const [home, setHome] = useState("");
    const [projects, setProjects] = useState("");
    const [contact, setContact] = useState("");


    useEffect(() => {
        switch (window.location.pathname) {
            case "/":
                setHome("text-success")
                break;
            case "/resume":
                setResume("text-success");
                break;
            case "/projects":
                setProjects("text-success");
                break;
            case "/contact":
                setContact("text-success");
        }
    }, [])

    return (
        <div className={`${styles.sideBar} bg-dark`}>
            <div className={styles.iconCon}>
                <a href="/">
                    <FontAwesomeIcon icon={faHome} className={`${home}`}  />
                </a>
                <a href="/projects">
                    <FontAwesomeIcon icon={faProjectDiagram} className={`${projects}`}  />
                </a>

                <a href="/resume">
                    <FontAwesomeIcon icon={faFileAlt} className={`${resume}`}  />
                </a>

                <a href="/contact">
                    <FontAwesomeIcon icon={faIdBadge} className={`${contact}`} />
                </a>
            </div>
        </div>
    )
}

export default SideBar;
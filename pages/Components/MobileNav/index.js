import React, {useState} from "react";
import Styles from "./MobileNav.module.css";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"

function MobileNav() {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        if (show) setShow(false);
        if (!show) setShow(true);
    }

    return (
        <>
            <div className={`${Styles.mobileNav} bg-dark`}>
                <Button type="button" onClick={() => handleShow()}>
                    <FontAwesomeIcon icon={faBars} />
                </Button>
            </div>
            {
                show ? <div className={`${Styles.navList} bg-dark`} id="navList">
                    <ul className={Styles.navItems}>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/projects">Projects</a>
                        </li>
                        <li>
                            <a href="/resume">Resume</a>
                        </li>
                        <li>
                            <a href="/contact">Contact me</a>
                        </li>
                    </ul>
                </div> : null
            }

        </>
    )
}

export default MobileNav;
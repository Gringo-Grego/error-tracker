import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../Components/Atoms/Button/Button';
import styles from './navigation.module.css';
import logo from '../../logo.svg';

const Topnav = ({ history }) => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    return (
        <div>
            <div className={styles.topnavMain}>
                <div className={styles.topnavSection}>
                    <img className={styles.logo} src={logo} alt="logo" />
                </div>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.title}>
                        App Name
                </h1>
                </div>
                <div className={`${styles.topnavSection} ${styles.topnavButtons}`}>

                    <GlobalButton content={"Dashboard"} kind="rectangle" onClick={() => { history.push('dashboard') }} />
                    <GlobalButton content={"Settings"} kind="rectangle" onClick={() => { history.push('settings') }} />
                    <GlobalButton content={"Logout"} kind="rectangle" onClick={() => { history.push('logout') }} />

                    {/* content, disabled, onClick, customStyles, type, kind */}
                </div>
                <div className={styles.hamburger} onClick={() => { setHamburgerOpen(!hamburgerOpen) }}>
                    <div className={styles.burgerLine}></div>
                    <div className={styles.burgerLine}></div>
                    <div className={styles.burgerLine}></div>
                </div>
            </div>
            {hamburgerOpen?<div className={styles.burgerMenu}>
                <GlobalButton content={"Dashboard"} kind="rectangle" onClick={() => { history.push('dashboard') }} />
                <GlobalButton content={"Settings"} kind="rectangle" onClick={() => { history.push('settings') }} />
                <GlobalButton content={"Logout"} kind="rectangle" onClick={() => { history.push('logout') }} />
            </div>:null}
        </div>
    )
}
export default withRouter(Topnav);
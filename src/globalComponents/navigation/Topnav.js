import React from 'react';
import { withRouter } from 'react-router-dom';
import GlobalButton from '../buttons/GlobalButton';
import styles from './navigation.module.css';

const Topnav = ({history})=>{

    return (
        <div className={styles.topnavMain}>
            <div className={styles.topnavSection}></div>
            <div className={styles.topnavSection}></div>
            <div className={`${styles.topnavSection} ${styles.topnavButtons}`}>
               
                <GlobalButton content={"Dashboard"} onClick={()=>{history.push('dashboard')}}/>
                <GlobalButton content={"Settings"} onClick={()=>{history.push('settings')}}/>
                <GlobalButton content={"Logout"} onClick={()=>{history.push('logout')}}/>

                {/* content, disabled, onClick, customStyles, type, kind */}
            </div>
        </div>
    )
}
export default withRouter(Topnav);
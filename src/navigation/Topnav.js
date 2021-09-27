import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../Components/Atoms/Button/Button';
import styles from './navigation.module.css';
// import { ThemeContext } from '../Contexts/ThemeContext';
const Topnav = ({history})=>{
// const {theme} 
    return (
        <div className={styles.topnavMain}>
            <div className={styles.topnavSection}></div>
            <div className={styles.topnavSection}></div>
            <div className={`${styles.topnavSection} ${styles.topnavButtons}`}>
               
                <Button content={"Dashboard"} onClick={()=>{history.push('dashboard')}}/>
                <Button content={"Settings"} onClick={()=>{history.push('settings')}}/>
                <Button content={"Logout"} onClick={()=>{history.push('logout')}}/>

                {/* content, disabled, onClick, customStyles, type, kind */}
            </div>
        </div>
    )
}
export default withRouter(Topnav);
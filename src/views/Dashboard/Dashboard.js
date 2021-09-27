import React from "react";
import Topnav from "../../navigation/Topnav";
import styles from './Dashboard.module.css';
// import exclamationMark from '../../images/exclamation.svg';

const Dashboard = () => {
    return (
        <div className = {styles.main}>
            <Topnav />
            Hello from the Dashboard
        </div>
    )
}
export default Dashboard;
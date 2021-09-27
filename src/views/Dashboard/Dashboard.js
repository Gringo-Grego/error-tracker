import React from "react";
import Card from "../../Components/Molecules/Card/Card";
import Topnav from "../../navigation/Topnav";
import styles from './Dashboard.module.css';
// import exclamationMark from '../../images/exclamation.svg';

const Dashboard = () => {
    return (
        <div className = {styles.main}>
            
            <h1>Hello from the Dashboard</h1>
            <Card>
                <p>I AM HAPPY</p>
            </Card>

        </div>
    )
}
export default Dashboard;
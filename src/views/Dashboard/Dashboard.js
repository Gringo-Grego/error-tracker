import React from "react";
import Card from "../../Components/Molecules/Card/Card";
import styles from './Dashboard.module.css';
// import exclamationMark from '../../images/exclamation.svg';

const Dashboard = () => {
    return (
        <div className={styles.main}>
            <div className={styles.leftCol}>
                <Card>
                    <div>
                        <div className={styles.cardTitle}>
                            <h3>Active Users</h3>
                        </div>
                        <div className = {styles.hr}></div>
                        <h2 className={styles.subheading}>Right Now</h2>
                        <p className = {styles.bigNum}>9868</p>

                    </div>
                </Card>
                <Card>
                    <div>
                        <div className={styles.cardTitle}>
                            <h3>Active 404 Users</h3>
                        </div>
                        <div className = {styles.hr}></div>
                        <h2 className={styles.subheading}>Right Now</h2>
                        <p className = {styles.bigNum}>11</p>
                    </div>
                </Card>
            </div>
            <div className={styles.rightCol}>
                <Card>
                    <div>
                        <div className={styles.cardTitle}>
                            <h3>Chart</h3>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div>
                        <div className={styles.cardTitle}>
                            <h3>Table</h3>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div>
                        <div className={styles.cardTitle}>
                            <h3>Table</h3>
                        </div>
                    </div>
                </Card>
            </div>
        </div>

    )
}
export default Dashboard;
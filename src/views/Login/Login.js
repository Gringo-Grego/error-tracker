import React, { useState } from 'react';
import FormSmall from '../../globalComponents/forms/FormSmall';
import styles from './Login.module.css';
import globalStyles from '../../styling/globalStyles.module.css';
import InputErrorMessage from '../../globalComponents/forms/InputErrorMessage';
import axios from 'axios';
import Toast from '../../globalComponents/Toast/Toast';

const Login = () => {
    const [toastList, setToastList] = useState([]);

    const validatePassword = (val, errors) => {
        if (!val) {
            errors.password = <InputErrorMessage message="Password is required." />
        }
        return errors;
    }
    const validateUsername = (val, errors) => {
        if (!val) {
            errors.username = <InputErrorMessage message="Username is required." />
        }
        return errors;
    }
    const attepmtLogin = async (values) => {
        let URL = `${process.env.REACT_APP_API_URL}/login`;
        try {
            await axios.post(URL, values);
        }
        catch (e) {
            console.log(e);
            setToastList([...toastList, ...[{
                id: Date.now(),
                title: "Error",
                description: "Wrong User Credentials",
                backgroundColor: "var(--color-danger)",
            }]])
        }
    }
    return (
        <div className={styles.main}>
            {/* <div>
                <h1>Login</h1>
            </div> */}
            <div className={styles.formWrapper}>
            <div className={globalStyles.card}>
                <FormSmall
                    handleSubmit={attepmtLogin}
                    title="Login"
                    initialValues={{ username: "", password: "" }}
                    fields={[{
                        name: 'username', label: 'Username', validate: validateUsername
                    },
                    { name: 'password', label: "Password", validate: validatePassword, type: "password" }
                    ]} />
                <Toast
                    toastList={toastList}
                    position={"top_right"}
                    autoDelete={true}
                    dismissTime={3500}
                />
            </div>
            </div>
        </div>
    )
}

export default Login;
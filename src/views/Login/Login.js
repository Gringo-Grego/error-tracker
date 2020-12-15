import React from 'react';
import FormSmall from '../../globalComponents/forms/FormSmall';
import styles from './Login.module.scss';
import InputErrorMessage from '../../globalComponents/forms/InputErrorMessage';

const Login = () => {
    const validatePassword = (val, errors)=>{
        if(!val){
            errors.password = <InputErrorMessage message="Password is required."/>
        }
        return errors;
    }
    const validateUsername = (val, errors)=>{
        if(!val){
            errors.username = <InputErrorMessage message="Username is required."/>
        }
        return errors;
    }
    return (
        <div className={styles.main}>
            Login
            <FormSmall
                title="Login"
                initialValues={{ username: "", password: "" }}
                fields={[{
                    name: 'username', label: 'Username', validate: validateUsername
                },
                { name: 'password', label: "Password", validate: validatePassword }
                ]} />
        </div>
    )
}

export default Login;
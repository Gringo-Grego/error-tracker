import React from 'react';
import styles from './forms.module.css';
const InputErrorMessage = ({message})=>{
    return (<p className = {styles.inputError}>{message}</p>)
}

export default InputErrorMessage;
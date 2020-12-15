import React from 'react';
import styles from './forms.module.scss';
const InputErrorMessage = ({message})=>{
    return (<p className = {styles.inputError}>{message}</p>)
}

export default InputErrorMessage;
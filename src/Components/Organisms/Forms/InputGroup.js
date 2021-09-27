import React from 'react';
import styles from './forms.module.css';

const InputGroup = ({ label, value, handleChange, handleBlur, placeholder, name, errors, touched, type}) => {

    return (
        <div className={styles.inputGroup}>
            <label className={styles.floatingLabel}>{label}</label>
            <input
                name={name}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                className={styles.formInput}
                placeholder={placeholder}
                type={type}
                
            />
            {errors[name] && touched[name] && errors[name]}
        </div>
    )
}

export default InputGroup;
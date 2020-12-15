import React from 'react';
import styles from './forms.module.scss';

const InputGroup = ({ label, value, handleChange, handleBlur, placeholder, name, errors, touched }) => {

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
                
            />
            {errors[name] && touched[name] && errors[name]}
        </div>
    )
}

export default InputGroup;
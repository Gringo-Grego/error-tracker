import React from 'react';
import styles from './button.module.css';

const Button =({ content, disabled, onClick, customStyles, type, kind }) => {

    switch (kind) {
        case 'round':
            return (
                <button
                    type={type}
                    className={`${styles.button} ${styles.round}`}
                    style={customStyles}
                    // style={{backgroundColor:'red'}}
                    disabled={disabled}
                    onClick={onClick}
                >
                    {content}
                </button>
            )
        default :
        return (
            <button
                type={type}
                className={styles.button}
                style={customStyles}
                // style={{backgroundColor:'red'}}
                disabled={disabled}
                onClick={onClick}
            >
                {content}
            </button>
        )
    }
}

export default Button;
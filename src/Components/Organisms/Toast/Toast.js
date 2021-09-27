import React, { useState, useEffect } from 'react';
import styles from './Toast.module.css'
import PropTypes from 'prop-types';

const Toast = props => {
    const { toastList, position, autoDelete, dismissTime } = props;
    const [list, setList] = useState(toastList);

    useEffect(() => {
        setList([...toastList]);
        // eslint-disable-next-line
    }, [toastList]);
    useEffect(() => {
        const interval = setInterval(() => {
            if (autoDelete && toastList.length && list.length) {
                deleteToast(toastList[0].id);
            }
        }, dismissTime);
        
        return () => {
            clearInterval(interval);
        }
        // eslint-disable-next-line
    }, [toastList, autoDelete, dismissTime, list]);
    const deleteToast = id => {
        const listItemIndex = list.findIndex(e => e.id === id);
        const toastListItem = toastList.findIndex(e => e.id === id);
        list.splice(listItemIndex, 1);
        toastList.splice(toastListItem, 1);
        setList([...list]);
    }
    return (
        <>
            <div className={`${styles.notification_container} ${styles[position]}`}>
                {
                    list.map((toast, i) =>     
                        <div 
                            key={i}
                            className={`${styles.notification} ${styles.toast} ${styles[position]}`}
                            style={{ backgroundColor: toast.backgroundColor }}
                        >
                            <button onClick={() => deleteToast(toast.id)}>
                                X
                            </button>
                            <div className={styles.notification_image}>
                                {/* <img src={toast.icon} alt="" /> */}
                            </div>
                            <div>
                                <p className={styles.notification_title}>{toast.title}</p>
                                <p className={styles.notification_message}>
                                    {toast.description}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}
Toast.propTypes = {
    toastList: PropTypes.array.isRequired,
    position: PropTypes.string,
    autoDelete: PropTypes.bool,
    dismissTime: PropTypes.number
}
export default Toast;
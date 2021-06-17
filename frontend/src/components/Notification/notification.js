import styles from './Notification.module.scss';
import {useEffect, useState} from "react";

const Notification = ({
    text = '',
    isVisible = false,

}) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(isVisible);

        return () => {
            setActive(false);
        }
    }, [isVisible, setActive]);

    const hideNotification = () => {
        setActive(false);
    }

    return (
        <>
            {
                active && (
                    <div className={styles.notification}>
                        {text}
                        <span className={styles.loading}
                              onAnimationEnd={hideNotification} />
                    </div>
                )
            }
        </>
    )
}

export default Notification;
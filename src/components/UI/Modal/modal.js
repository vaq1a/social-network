import styles from './Modal.module.scss';

const Modal = ({
    children,
    title,
    visible = false,
    handleClose = () => {},

}) => {

    if(!visible) {
        return null;
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modal__header}>
                <div className={styles.modal__close}
                     onClick={handleClose}>
                    x
                </div>
                <div className={styles.modal__title}>
                    {title}
                </div>
            </div>
            {children}
        </div>
    )
}

export default Modal;
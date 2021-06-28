import styles from '../Dropdown.module.scss';

const DropdownItem = ({
    onClick = () => {},
    children,

}) => {
    return (
        <div className={styles.dropdown__item}
             onClick={onClick}>
            {children}
        </div>
    )
}

export default DropdownItem;
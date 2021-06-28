import React, {useCallback, useEffect, useRef} from 'react';
import styles from './Dropdown.module.scss';

const Dropdown = ({
    children,
    setDropdownVisible,

}) => {
    const dropdownRef = useRef();

    const handleCloseDropdown = useCallback((e) => {
        if(!e.path.includes(dropdownRef.current)) {
            setDropdownVisible(false);
        }
    }, [setDropdownVisible]);

    useEffect(() => {
        document.body.addEventListener('click', handleCloseDropdown);

        return () => {
            document.body.removeEventListener('click', handleCloseDropdown);
        }
    }, [handleCloseDropdown])

    return (
        <div className={styles.dropdown}
             ref={dropdownRef}>
            {children}
        </div>
    )
}

export default Dropdown;
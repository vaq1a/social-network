import React from 'react';
import styles from "./SideMenuItem.module.scss";
import {classNameToString} from "../../../utils/classNameToString";

const SideMenuItem = ({
    icon: Icon,
    className = '',
    children,

}) => {

    const classes = classNameToString(
        styles.sideMenu__item,
        className,

    );

    return (
        <li className={classes}>
            {
                Icon && (
                    <Icon className={styles.sideMenu__icon} />
                )
            }
            <span className={styles.sideMenu__title}>
                {children}
            </span>
        </li>
    )
}

export default SideMenuItem;
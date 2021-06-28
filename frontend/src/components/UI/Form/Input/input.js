import React from 'react';
import styles from './Input.module.scss';
import {classNameToString} from "../../../../utils/classNameToString";

const Input = React.forwardRef(({
    type = 'text',
    placeholder = '',
    className = '',
    ...restProps
}, ref) => {

    const classes = classNameToString(
        styles.input,
        className,

    );

    return (
        <input type={type}
               ref={ref}
               className={classes}
               placeholder={placeholder}
               {...restProps} />
    )
});

export default Input;
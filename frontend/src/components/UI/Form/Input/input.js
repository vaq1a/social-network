import React from 'react';
import styles from './Input.module.scss';

const Input = React.forwardRef(({
    errors= {},
    type = 'text',
    placeholder = '',
    className = '',
    name = 'text',
    ...restProps
}, ref) => {

    return (
        <div className={className}>
            <input type={type}
                   ref={ref}
                   className={styles.input}
                   placeholder={placeholder}
                   name={name}
                   {...restProps} />
            {
                errors[`${name}`]?.message && (
                    <span className={styles.inputLabel}>
                        {errors[`${name}`].message}
                    </span>
                )
            }
        </div>
    )
});

export default Input;
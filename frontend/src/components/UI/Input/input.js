import styles from './Input.module.scss';
import {classNameToString} from "../../../utils/classNameToString";

const Input = ({
    type = 'text',
    placeholder = '',
    className = '',

}) => {

    const classes = classNameToString(
        styles.input,
        className,

    );

    return (
        <input type={type}
               className={classes}
               placeholder={placeholder}/>
    )
}

export default Input;
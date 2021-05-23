import {classNameToString} from "../../../utils/classNameToString";
import styles from './Button.module.scss';

const ButtonModes = {
    filled: styles.__filled,
    outlined: styles.__outlined,

};

const ButtonSizes = {
    normal: '',

};

const BUTTON_COLORS = {
    BlUE: '',

};

const Button = ({
    children,
    className= '',
    mode = ButtonModes.filled,
    size = ButtonSizes.normal,
    color = BUTTON_COLORS.BlUE,
    full = false,
    onClick = () => {},

}) => {

    const classes = classNameToString(
        className,
        `${styles.button}`,
        size,
        mode,
        color,
        full && `${styles.__full}`,

    )

    return (
        <button className={classes}
                onClick={onClick}>
            {children}
        </button>
    )
}


export {
    ButtonModes,
    ButtonSizes,
    BUTTON_COLORS,

};

export default Button;
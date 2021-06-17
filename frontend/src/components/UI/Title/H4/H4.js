
import styles from './H4.module.scss';
import {classNameToString} from "../../../../utils/classNameToString";

const H4 = ({
    className = '',
    children,

}) => {

    const classes = classNameToString(
      styles.h4,
      className,

    );

    return (
        <h4 className={classes}>
            {children}
        </h4>
    )
}

export default H4;

import styles from './H1.module.scss';
import {classNameToString} from "../../../../utils/classNameToString";

const H1 = ({
    className = '',
    children,

}) => {

    const classes = classNameToString(
      styles.h1,
      className,

    );

    return (
        <h1 className={classes}>
            {children}
        </h1>
    )
}

export default H1;
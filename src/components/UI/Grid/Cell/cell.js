import styles from "./Cell.module.scss";
import {classNameToString} from "../../../../utils/classNameToString";

const Cell = ({
    children,
    className = '',

}) => {

    const classes = classNameToString(
        styles.cell,
        className,

    );

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Cell;
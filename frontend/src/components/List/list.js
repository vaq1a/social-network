import styles from "./List.module.scss";
import H4 from "../UI/Title/H4";
import {classNameToString} from "../../utils/classNameToString";

const List = ({
    title,
    className = '',
    children,

}) => {

    const classes = classNameToString(
        styles.list,
        className,

    );

    return (

        <div className={classes}>
            <H4 className={styles.list__title}>
                {title}
            </H4>

            {children}
        </div>
    )
}

export default List;
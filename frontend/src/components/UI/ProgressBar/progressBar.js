import styles from './ProgressBar.module.scss';
import {classNameToString} from "../../../utils/classNameToString";

const ProgressBar = ({
    className,
    count = 0,

}) => {


    const classes = classNameToString(
        styles.bar,
        className,

    );

    const progressStyle = {
        color: 'white',
        borderRadius: 3,
        width: `${count}%`,
        height: '100%',
        backgroundColor: `${count === 'full' ? 'red' : '#1da1f2'}`
    };

    return (
        <div className={classes}>
            <div style={progressStyle} />
        </div>
    )
}

export default ProgressBar;
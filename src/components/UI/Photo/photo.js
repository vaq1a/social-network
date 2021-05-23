import styles from './Photo.module.scss';
import {classNameToString} from "../../../utils/classNameToString";

const Photo = ({
    image,
    className,

}) => {

    const classes = classNameToString(
        styles.post__imageWrapper,
        className,

    );

    return (
        <div className={classes}>
            <img src={image}
                 className={styles.post__image}
                 alt={"avatar"} />
        </div>
    )
}

export default Photo;
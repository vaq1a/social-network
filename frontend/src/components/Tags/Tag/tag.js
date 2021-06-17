import styles from "./Tag.module.scss";
import {Link} from "react-router-dom";

const Tag = ({
    theme,
    count,
    id,

}) => {
    return (
        <Link key={id}
              className={styles.item}
              to={`/home/search/?q=${theme}`}>
                <div className={styles.text}>
                    {theme}
                </div>
                <div className={styles.count}>
                    Твитов: {count}
                </div>
        </Link>
    )
}

export default Tag;
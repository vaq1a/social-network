import styles from "./Tweet.module.scss";
import CommentIcon from "../../Icons/Comment";
import LoopIcon from "../../Icons/Loop";
import LikeIcon from "../../Icons/Like";
import ReplyIcon from "../../Icons/Reply";
import Photo from "../../UI/Photo";

const Tweet = ({
    image,
    name,
    login,
    time,
    countComment,
    children,

}) => {

    return (
        <div className={styles.post}>
            <Photo image={image}
                   className={styles.photo} />
            <div className={styles.content}>
                <div className={styles.user}>
                    <div className={styles.user__name}>
                        {name}
                    </div>
                    <div className={styles.user__login}>
                        {login}
                    </div>
                    <div className={styles.time}>
                        {time}
                    </div>
                </div>
                <div className={styles.text}>
                    {children}
                </div>
                <div className={styles.actions}>
                    <div className={styles.actions__button}>
                        <CommentIcon className={styles.actions__svg} />
                        <span className={styles.actions__countComments}>
                            {countComment}
                        </span>
                    </div>
                    <div className={styles.actions__button}>
                        <LoopIcon className={styles.actions__svg} />
                    </div>
                    <div className={styles.actions__button}>
                        <LikeIcon className={styles.actions__svg} />
                    </div>
                    <div className={styles.actions__button}>
                        <ReplyIcon className={styles.actions__svg} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet;
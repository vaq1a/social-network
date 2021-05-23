import styles from './UserItem.module.scss';
import PersonAddIcon from "../../Icons/PersonAdd";
import Photo from "../../UI/Photo";

const photo_src = "https://images.chesscomfiles.com/uploads/v1/user/75372640.5116a1ac.1200x1200o.526a857d8258.png";

const UserItem = ({
    name,
    login,
}) => {
    return (
        <div className={styles.item}>
            <Photo image={photo_src}
                   className={styles.photo} />
            <div className={styles.content}>
                <div>
                    {name}
                </div>
                <div>
                    {login}
                </div>
            </div>
            <div>
                <PersonAddIcon className={styles.personAdd} />
            </div>
        </div>
    )
}

export default UserItem;
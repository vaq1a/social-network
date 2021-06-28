import {useState} from 'react';
import styles from "./Tweet.module.scss";
import CommentIcon from "../../Icons/Comment";
import LoopIcon from "../../Icons/Loop";
import LikeIcon from "../../Icons/Like";
import ReplyIcon from "../../Icons/Reply";
import Photo from "../../UI/Photo";
import {formatDate} from "../../../utils/formatDate";
import Dropdown from "../../Dropdown";
import DropdownItem from "../../Dropdown/DropdownItem";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteTweetAC, updateTweetAC} from "../../../store/ducks/tweets/actionCreators";
import Textarea from "../../UI/Textarea";
import Button from "../../UI/Button";

const Tweet = ({
    image,
    name,
    login,
    time,
    countComment,
    id,
    children,

}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [textareaVisible, setTextareaVisible] = useState(false);
    const [textareaText, setTextareaText] = useState(children);

    const handleOpenDropdown = (e) => {
        e.stopPropagation();
        setDropdownVisible(!dropdownVisible);
    }

    const handleClickOnLink = (e) => {
        e.preventDefault();
        e.stopPropagation();
        history.push(`/home/tweets/${id}`);
    }

    const handleDeleteTweet = (e) => {
        e.stopPropagation();
        dispatch(deleteTweetAC(id));
        setDropdownVisible(false);
    }

    const handleUpdateTweet = (e) => {
        e.stopPropagation();
        setTextareaVisible(true);
        setDropdownVisible(false);
    }

    const handleNewUpdateTweet = (e) => {
        setTextareaText(e.currentTarget.value);
    }

    const handleSubmitUpdateTweet = (e) => {
        const data = {
            tweetId: id,
            text: textareaText
        }
        dispatch(updateTweetAC(data));
        setTextareaVisible(false);
    }

    return (
        <div style={{textDecoration: "none"}}
             onClick={handleClickOnLink}>
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
                            {formatDate(new Date(time))}
                        </div>
                        <div className={styles.dropdown}>
                            <div onClick={handleOpenDropdown}>
                                :
                            </div>
                            {
                                dropdownVisible && (
                                    <Dropdown setDropdownVisible={setDropdownVisible}>
                                        <DropdownItem onClick={handleUpdateTweet}>
                                            Редактировать
                                        </DropdownItem>
                                        <DropdownItem onClick={handleDeleteTweet}>
                                            Удалить
                                        </DropdownItem>
                                    </Dropdown>
                                )
                            }
                        </div>
                    </div>
                    {
                        textareaVisible ? (
                            <>
                                <Textarea placeholder='Редактирвоание твита...'
                                          setText={handleNewUpdateTweet}
                                          value={textareaText} />
                                <Button onClick={handleSubmitUpdateTweet}>
                                    Отправить
                                </Button>
                            </>
                        ) : (
                            <div className={styles.text}>
                                {children}
                            </div>
                        )
                    }
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
        </div>
    )
}

export default Tweet;
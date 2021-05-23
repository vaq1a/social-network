import {useState} from 'react';
import styles from './EntryField.module.scss';
import Photo from "../UI/Photo";
import Textarea from "../UI/Textarea";
import GalleryIcon from "../Icons/Gallery";
import SmileIcon from "../Icons/Smile";
import Button from "../UI/Button/Button";
import ProgressBar from "../UI/ProgressBar";
import {useDispatch} from "react-redux";
import {fetchAddNewTweet} from "../../store/ducks/tweets/actionCreators";

const photo_src = "https://images.chesscomfiles.com/uploads/v1/user/75372640.5116a1ac.1200x1200o.526a857d8258.png";
const MAX_LENGTH = 80;

const EntryField = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const count = Math.round((text.length / MAX_LENGTH) * 100);
    const textCount = MAX_LENGTH - text.length;

    const inputText = (e) => {
        setText(e.currentTarget.value);
    }

    const handleClickAddTweet = () => {
        dispatch(fetchAddNewTweet(text));
        setText('');
    }

    return (
        <div className={styles.field}>
            <Photo image={photo_src} />
            <div className={styles.content}>
                <Textarea placeholder="Что происходит?"
                          value={text}
                          setText={inputText} />
                <div className={styles.actions}>
                    <div>
                        <div className={styles.gallery}>
                            <GalleryIcon />
                        </div>
                        <div className={styles.reactions}>
                            <SmileIcon />
                        </div>
                    </div>
                    <div>
                        <div className={styles.count}>
                            {text.length <= MAX_LENGTH ? text.length : textCount}
                        </div>
                        <ProgressBar className={styles.progress}
                                     count={text.length <= MAX_LENGTH ? count : 'full'} />
                        <Button onClick={handleClickAddTweet}>
                            Твитнуть
                        </Button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default EntryField;
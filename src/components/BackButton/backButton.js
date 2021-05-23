import BackspaceIcon from "../Icons/Backspace";
import {useHistory} from "react-router-dom";
import styles from './BackButton.module.scss';

const BackButton = () => {
    const history = useHistory();

    const handleClickButton = () => {
        history.goBack();
    }

    return (
        <div onClick={handleClickButton}>
            <BackspaceIcon className={styles.backspace} />
        </div>
    )
}

export default BackButton;
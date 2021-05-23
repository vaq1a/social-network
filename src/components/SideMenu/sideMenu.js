import {useState} from 'react';
import styles from "./SideMenu.module.scss";
import Button from "../UI/Button";
import {ButtonModes} from "../UI/Button/Button";
import Modal from "../UI/Modal";
import EntryField from "../EntryField";

const SideMenu = ({
    children,

}) => {

    const [openAddTweetModal, setOpenAddTweetModal] = useState(false);

    const onCloseAddTweetModal = () => {
        setOpenAddTweetModal(false);
    }

    const onOpenAddTweetModal = () => {
        setOpenAddTweetModal(true);
    }

    return (
        <>
            <ul className={styles.sideMenu}>
                {children}
                <Button mode={ButtonModes.filled}
                        onClick={onOpenAddTweetModal}>
                    Твитнуть
                </Button>
            </ul>

            <Modal visible={openAddTweetModal}
                   handleClose={onCloseAddTweetModal}>
                <EntryField />
            </Modal>
        </>
    )
}

export default SideMenu;
import {useState} from 'react';
import H1 from "../../components/UI/Title/H1";
import Button from "../../components/UI/Button";
import H4 from "../../components/UI/Title/H4";
import styles from './Auth.module.scss';
import TwitterIcon from "../../components/Icons/Twitter";
import {ButtonModes} from "../../components/UI/Button/Button";
import SignUp from "../../components/EntryForm/SignUp";
import SignIn from "../../components/EntryForm/SignIn";

const Auth = () => {

    const [visibleModal, setVisibleModal] = useState(undefined);

    const openSignIn = () => {
        setVisibleModal('signIn');
    }

    const openSignUp = () => {
        setVisibleModal('signUp');
    }

    const handleClose = () => {
        setVisibleModal(undefined);
    }

    return (
        <>
            <div className={styles.signIn}>
                <div className={styles.signIn__left}>
                    <div className={styles.infoItem}>
                        - Читайте о том, что вам интересно.
                    </div>
                    <div className={styles.infoItem}>
                        - Узнайте, о чем говорят в мире.
                    </div>
                    <div className={styles.infoItem}>
                        - Присоединяйтесь к общению.
                    </div>
                </div>
                <div className={styles.signIn__right}>
                    <TwitterIcon className={styles.twitter_icon}/>
                    <H1>
                        Узнайте что происходит в мире прямо сейчас
                    </H1>
                    <H4>
                        Присоединятесь к твиттеру прямо сейчас
                    </H4>

                    <Button mode={ButtonModes.filled}
                            onClick={openSignUp}
                            full
                            className={styles.buttonSignUp}>
                        Зарегистрироваться
                    </Button>
                    <Button mode={ButtonModes.outlined}
                            full
                            onClick={openSignIn}>
                        Войти
                    </Button>
                </div>
            </div>

            <SignIn handleClose={handleClose}
                    visibleModal={visibleModal} />

            <SignUp handleClose={handleClose}
                    visibleModal={visibleModal} />
        </>
    )
}

export default Auth;
import {useState} from 'react';
import H1 from "../../components/UI/Title/H1";
import Button from "../../components/UI/Button";
import H4 from "../../components/UI/Title/H4";
import styles from './SignIn.module.scss';
import TwitterIcon from "../../components/Icons/Twitter";
import Modal from "../../components/UI/Modal";
import Input from "../../components/UI/Input";
import {ButtonModes} from "../../components/UI/Button/Button";

const SignIn = () => {

    const [visibleModal, setVisibleModal] = useState(undefined);

    const openSignIn = () => {
        setVisibleModal('signIn');
    }

    const openSignUp = () => {
        setVisibleModal('signUp');
    }

    const handleClose = () => {
        setVisibleModal('');
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
                            className={styles.buttonSignUp}>
                        Зарегистрироваться
                    </Button>
                    <Button mode={ButtonModes.outlined}
                            onClick={openSignIn}>
                        Войти
                    </Button>
                </div>
            </div>

            <Modal title={"Войти в аккаунт"}
                   visible={visibleModal === 'signIn'}
                   handleClose={handleClose}>
                <Input type={"email"}
                       className={styles.input}
                       placeholder={"Email"}/>
                <Input type={"password"}
                       className={styles.input}
                       placeholder={"Пароль"}/>
                <Button mode={ButtonModes.filled}
                        onClick={handleClose}
                        full>
                    Войти
                </Button>
            </Modal>

            <Modal title={"Создайте учётную запись"}
                   visible={visibleModal === 'signUp'}
                   handleClose={handleClose}>
                <Input className={styles.input}
                       placeholder={"Имя"}/>
                <Input type={"email"}
                       className={styles.input}
                       placeholder={"Email"}/>
                <Input type={"password"}
                       className={styles.input}
                       placeholder={"Пароль"}/>
                <Button mode={ButtonModes.filled}
                        full>
                    Далее
                </Button>
            </Modal>
        </>
    )
}

export default SignIn;
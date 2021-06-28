import Modal from "../../UI/Modal";
import Input from "../../UI/Form/Input";
import styles from "../../../pages/Auth/Auth.module.scss";
import Button from "../../UI/Button";
import {ButtonModes} from "../../UI/Button/Button";
import Form from "../../UI/Form";

const SignUp = ({
   handleClose = () => {},
   visibleModal = '',

}) => {
    return (
        <Modal title={"Создайте учётную запись"}
               visible={visibleModal === 'signUp'}
               handleClose={handleClose}>
            <Form>
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
            </Form>
        </Modal>
    )
}

export default SignUp;
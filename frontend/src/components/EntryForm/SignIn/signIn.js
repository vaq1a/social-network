import Input from "../../UI/Form/Input";
import styles from "../../../pages/Auth/Auth.module.scss";
import Button from "../../UI/Button";
import {ButtonModes} from "../../UI/Button/Button";
import Modal from "../../UI/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Form from "../../UI/Form/form";
import {useDispatch} from "react-redux";
import {fetchUserAC} from "../../../store/ducks/user/actionCreator";
import {useHistory} from "react-router-dom";

const signInSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(6).required(),
});


const SignIn = ({
    handleClose = () => {},
    visibleModal = '',

}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(signInSchema)
    });

    const onSubmit = ({username, password}) => {
        const user = {
            username,
            password,

        };

        dispatch(fetchUserAC(user));

        handleClose();

        history.push(`/home`);
    }

    return (
        <Modal title={"Войти в аккаунт"}
               visible={visibleModal === 'signIn'}
               handleClose={handleClose}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input type={"text"}
                       errors={errors}
                       className={styles.input}
                       placeholder={"Username"}
                       {...register("username")}/>
                <Input type={"password"}
                       errors={errors}
                       className={styles.input}
                       placeholder={"Password"}
                       {...register("password")} />
                <Button mode={ButtonModes.filled}
                        type="submit"
                        full>
                    Войти
                </Button>
            </Form>
        </Modal>
    )
}

export default SignIn;
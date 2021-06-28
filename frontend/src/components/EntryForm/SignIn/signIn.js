import Input from "../../UI/Form/Input";
import styles from "../../../pages/Auth/Auth.module.scss";
import Button from "../../UI/Button";
import {ButtonModes} from "../../UI/Button/Button";
import Modal from "../../UI/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Form from "../../UI/Form/form";
import {AuthApi} from "../../../services/api/authApi";

const signInSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(6).required(),
});


const SignIn = ({
    handleClose = () => {},
    visibleModal = '',

}) => {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(signInSchema)
    });

    const onSubmit = async (data) => {
        const user = await AuthApi.signIn({
            username: data.username,
            password: data.password
        });

        handleClose();
    }

    return (
        <Modal title={"Войти в аккаунт"}
               visible={visibleModal === 'signIn'}
               handleClose={handleClose}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input type={"text"}
                       className={styles.input}
                       placeholder={"Username"}
                       {...register("username")}/>
                <Input type={"password"}
                       className={styles.input}
                       placeholder={"Password"}
                       {...register("password")} />
                <Button mode={ButtonModes.filled}
                        type="submit"
                        full>
                    Войти
                </Button>
            </Form>
            {
                errors?.username && (
                    <div>
                        {errors.username.message}
                    </div>
                )
            }
            {
                errors?.password && (
                    <div>
                        {errors.password.message}
                    </div>
                )
            }
        </Modal>
    )
}

export default SignIn;
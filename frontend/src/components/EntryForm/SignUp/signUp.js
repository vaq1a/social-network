import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Modal from "../../UI/Modal";
import Input from "../../UI/Form/Input";
import styles from "../../../pages/Auth/Auth.module.scss";
import Button from "../../UI/Button";
import {ButtonModes} from "../../UI/Button/Button";
import Form from "../../UI/Form";
import {useDispatch} from "react-redux";
import {fetchSignUpUserAC} from "../../../store/ducks/user/actionCreator";

const schema = yup.object().shape({
    fullname: yup.string().required('Fullname is required'),
    username: yup.string().required('Username is required'),
    email: yup.string().email().required('Email is required'),
    password: yup.string().min(6).required('Password is required'),
    password2: yup.string().min(6).required().oneOf([yup.ref('password'), null], 'Passwords must match'),

});

const SignUp = ({
   handleClose = () => {},
   visibleModal = '',

}) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = ({
        fullname,
        username,
        email,
        password,
        password2,

    }) => {
        const data = {
            email,
            fullname,
            username,
            password,
            password2,

        }

        dispatch(fetchSignUpUserAC(data));
        handleClose();
    }

    return (
        <Modal title={"Создайте учётную запись"}
               visible={visibleModal === 'signUp'}
               handleClose={handleClose}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input className={styles.input}
                       errors={errors}
                       {...register("fullname")}
                       placeholder={"full name"}/>
                <Input className={styles.input}
                       errors={errors}
                       {...register("username")}
                       placeholder={"user name"}/>
                <Input type={"email"}
                       {...register("email")}
                       errors={errors}
                       className={styles.input}
                       placeholder={"Email"}/>
                <Input type={"password"}
                       errors={errors}
                       {...register("password")}
                       className={styles.input}
                       placeholder={"Пароль"}/>
                <Input type={"password"}
                       errors={errors}
                       {...register("password2")}
                       className={styles.input}
                       placeholder={"Повторите пароль"}/>
                <Button mode={ButtonModes.filled}
                        type="submit"
                        full>
                    Зарегистрироваться
                </Button>
            </Form>
        </Modal>
    )
}

export default SignUp;